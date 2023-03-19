import React, {useState, useEffect} from 'react';
import {cleaning} from "../../data/types/cleanings";
import CloseButton from "./CloseButton";
import ConfirmModal from "./ConfirmModal";

type propsType = {
    todo: cleaning;
    animate: string;
    onCheck: (isCheck: boolean, id: string) => void;
    onDelete: (id: string) => void;
}

const TodoContainer = ({todo, animate, onCheck, onDelete}: propsType) => {
    const [isChecked, setIsChecked] = useState<boolean>(todo.isChecked);

    const toggleCheck = () => {
        setIsChecked(prev => !prev);
    }


    useEffect(() => {
        onCheck(isChecked, todo.id);
    }, [isChecked]);


    return (
        <div className={`${animate} select-none translate-x-full todo-container 
                        relative alert bg-sky-400 drop-shadow-lg`}>
            <div className='text-center flex justify-center items-center w-full'>
                <input
                    type="checkbox"
                    onChange={toggleCheck}
                    checked={isChecked}
                    className="checkbox absolute top-1/2 left-4 -translate-y-1/2"
                />
                <span className={`${isChecked ? 'line-through text-zinc-400 italic' : ''}
                                  text-2xl font-bold text-sky-50`}>
                    {todo.desc}
                </span>
                <CloseButton className='top-5' onClick={() => onDelete(todo.id)} />
            </div>
        </div>
    );
};

export default TodoContainer;
