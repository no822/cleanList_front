'use client'
import React, {useState, useRef} from 'react';
import registDragEvent from "../../utils/registDragEvent";


const inrange = (v: number, min: number, max: number) => {
    if (v < min) return min;
    if (v > max) return max;
    return v;
};

type propsType = {

};

const Drag = () => {
    const boundaryRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    const BOUNDARY_MARGIN = 0
    const DEFAULT_W = 50;
    const DEFAULT_H = 50;

    const [{ x, y }, setConfig] = useState({
        x: 0,
        y: 0,
    });

    const dragChangeHandler = (deltaX: number, deltaY: number) => {
        if (!boundaryRef.current) return;

        const boundary = boundaryRef.current.getBoundingClientRect();

        setConfig({
            x: inrange(x + deltaX, BOUNDARY_MARGIN, boundary.width - DEFAULT_W - BOUNDARY_MARGIN),
            y: inrange(
                y + deltaY,
                BOUNDARY_MARGIN,
                boundary.height - DEFAULT_H - BOUNDARY_MARGIN,
            ),
        });
    };

    const dragEndChangeHandler = (deltaX: number, deltaY: number) => {
       console.log(deltaX, deltaY) ;
    };


    return (
        <div className="h-full relative">
            <div className="mb-2 absolute -top-10">
                <span className="ml-4">x:{x} y:{y}</span>
            </div>

            <div ref={boundaryRef} className="border border-red-500 h-full grid items-start justify-start">
                <div
                    style={{ left: x, top: y, width: DEFAULT_W, height: DEFAULT_H }}
                    className="relative"
                    {...registDragEvent({
                        onDragChange: dragChangeHandler,
                        onDragEnd: dragEndChangeHandler,
                        stopPropagation: true
                    })}
                >
                    <div className="absolute h-full w-full cursor-move bg-white shadow-xl transition-[shadow,transform] active:scale-95 active:shadow-lg"
                         ref={boxRef} />
                </div>
            </div>
        </div>
    );
};

export default Drag;
