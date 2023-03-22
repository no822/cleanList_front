'use client'
import React, {useState, useRef, useEffect} from 'react';
import {MdPhotoSizeSelectLarge} from 'react-icons/md';
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
    const MIN_W = 70;
    const MIN_H = 70;

    const [{ x, y, w, h }, setConfig] = useState({
        x: 0,
        y: 0,
        w: 0,
        h: 0
    });



    useEffect(() => {
        const boundary = boundaryRef.current?.getBoundingClientRect();
        const DEFAULT_W = 70;
        const DEFAULT_H = 70;

        if (boundary) {
            setConfig({
                x: Math.floor(boundary.width / 2 - DEFAULT_W / 2),
                y: Math.floor(boundary.height / 2 - DEFAULT_H / 2),
                w: DEFAULT_W,
                h: DEFAULT_H,
            });
        }
    }, []);



    const dragChangeHandler = (deltaX: number, deltaY: number) => {
        if (!boundaryRef.current) return;

        const boundary = boundaryRef.current.getBoundingClientRect();

        setConfig({
            x: inrange(x + deltaX, BOUNDARY_MARGIN, boundary.width - w - BOUNDARY_MARGIN),
            y: inrange(y + deltaY, BOUNDARY_MARGIN, boundary.height - h - BOUNDARY_MARGIN),
            w,
            h,
        });
    };


    const resizeHandler2 = (deltaX: number, deltaY: number) => {
        if (!boundaryRef.current) return;
        const boundary = boundaryRef.current.getBoundingClientRect();
        setConfig({
            x,
            y,
            w: inrange(w + deltaX, MIN_W, boundary.width - x - BOUNDARY_MARGIN),
            h: inrange(h + deltaY, MIN_H, boundary.height - y - BOUNDARY_MARGIN),
        });
    };

    const resizeHandler = (deltaX: number, deltaY: number) => {
        if (!boundaryRef.current) return;
        const boundary = boundaryRef.current.getBoundingClientRect();
        setConfig({
            x: inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W),
            y: inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H),
            w: inrange(w - deltaX, MIN_W, x + w - BOUNDARY_MARGIN),
            h: inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN),
        });
    }

    const dragEndChangeHandler = (deltaX: number, deltaY: number) => {
       console.log(deltaX, deltaY) ;
    };


    return (
        <div className="h-full relative">
            <div className="fixed top-0 left-0 mb-2 -top-10">
                <span className="ml-4">x:{x} y:{y}</span>
                <span className="ml-4">w:{w} h:{h}</span>
            </div>

            <div ref={boundaryRef} className="border border-red-500 h-full grid items-start justify-start">
                <div
                    style={{ left: x, top: y, width: w, height: h }}
                    className="relative"

                    {...registDragEvent({
                        onDragChange: dragChangeHandler,
                        onDragEnd: dragEndChangeHandler,
                        stopPropagation: true
                    })}
                >
                    {/* Box */}
                    <div ref={boxRef}
                         className={`absolute h-full w-full cursor-move bg-white shadow-xl
                          transition-[shadow,transform] active:scale-95 active:shadow-lg`}
                    />


                    <div className="absolute top-0 left-0 right-12 w-4 h-4 cursor-nwse-resize"
                        {...registDragEvent({
                            onDragChange: resizeHandler,
                            onDragEnd: dragEndChangeHandler,
                            stopPropagation: true,
                        })}
                    >{<MdPhotoSizeSelectLarge />}</div>

                </div>
            </div>
        </div>
    );
};

export default Drag;
