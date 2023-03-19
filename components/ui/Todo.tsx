import React, {useState, useEffect} from 'react';
import {cleaning} from "../../data/types/cleanings";

type propsType = {
    todo: cleaning;
    animate: string;
    onCheck: (isCheck: boolean, id: string) => void;
}

const TodoContainer = ({todo, animate, onCheck}: propsType) => {
    const [isChecked, setIsChecked] = useState<boolean>(todo.isChecked);

    const toggleCheck = () => {
        setIsChecked(prev => !prev);
    }

    useEffect(() => {
        onCheck(isChecked, todo.id);
    }, [isChecked]);


    return (
        <div className={`${animate} select-none translate-x-full todo-container relative alert bg-sky-400 drop-shadow-lg`}>
            <div className='text-center flex justify-center w-full'>
                <input
                    type="checkbox"
                    onChange={toggleCheck}
                    checked={isChecked}
                    className="checkbox absolute top-1/2 left-4 -translate-y-1/2"
                />
                <span className={`text-2xl font-bold text-sky-50
                                    ${isChecked ? 'line-through text-zinc-400 italic' : ''}`}>
                    {todo.desc}
                </span>
            </div>
        </div>
    );
};

export default TodoContainer;
