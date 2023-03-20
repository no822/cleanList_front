import React, {useState, useEffect} from 'react';
import {cleaning} from "../../data/types/cleanings";
import CloseButton from "./CloseButton";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type propsType = {
    id: string;
    todo: cleaning;
    animate: string;
    onCheck: (isCheck: boolean, id: string) => void;
    onDelete: (id: string) => void;
}

const TodoContainer = ({id, todo, animate, onCheck, onDelete}: propsType) => {
    const [isChecked, setIsChecked] = useState<boolean>(todo.isChecked);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable(
        { id: id }
    );

    const itemStyle: any = {
        transform: CSS.Transform.toString(transform),
        transition,
        boxSizing: "border-box",
        touchAction: "none", // 해제하면 모바일 드래깅 안됨(https://docs.dndkit.com/api-documentation/draggable#recommendations
        cursor: 'auto'
    };


    const toggleCheck = () => {
        setIsChecked(prev => !prev);
    }


    useEffect(() => {
        onCheck(isChecked, todo.id);
    }, [isChecked]);


    return (
        <div className={`${animate} relative alert bg-sky-400 drop-shadow-lg`}
              ref={setNodeRef} {...attributes}  style={itemStyle}
        >
            <input
                type="checkbox"
                onChange={toggleCheck}
                checked={isChecked}
                className="checkbox absolute top-1/2 left-4 -translate-y-1/2"
            />
            <div {...listeners} className='h-full text-center flex justify-center items-center w-full cursor-grab'>
                <span className={`${isChecked ? 'line-through text-zinc-400 italic' : ''}
                                  text-2xl font-bold text-sky-50`}>
                    {todo.desc}
                </span>
            </div>
            <CloseButton className='top-3 right-2 flex justify-center w-8' onClick={() => onDelete(todo.id)} />
        </div>
    );
};

export default TodoContainer;
