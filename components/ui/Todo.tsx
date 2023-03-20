import React, {useState, useEffect} from 'react';
import {cleaning} from "../../data/types/cleanings";
import CloseButton from "./CloseButton";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {RxDragHandleDots2} from "react-icons/rx";

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
        cursor: 'auto'
    };


    const toggleCheck = () => {
        setIsChecked(prev => !prev);
    }


    useEffect(() => {
        onCheck(isChecked, todo.id);
    }, [isChecked]);


    return (
        <div className={`${animate} todo-container relative alert bg-sky-400 drop-shadow-lg`}
              ref={setNodeRef} {...attributes}  style={itemStyle}
        >
            <div className={` h-full text-center border border-red-500 
                            flex justify-center items-center w-full cursor-grab`}
            >
                <input
                    type="checkbox"
                    onChange={toggleCheck}
                    checked={isChecked}
                    className="checkbox absolute top-1/2 left-4 -translate-y-1/2"
                />
                <div {...listeners} className='touch-none flex justify-center items-center absolute left-10 h-8 w-8'><RxDragHandleDots2 /></div>
                <span className={`${isChecked ? 'line-through text-zinc-400 italic' : ''}
                                  text-2xl font-bold text-sky-50`}>
                    {todo.desc}
                </span>
                <CloseButton className='top-5 right-1 flex justify-center w-8' onClick={() => onDelete(todo.id)} />
            </div>
        </div>
    );
};

export default TodoContainer;
