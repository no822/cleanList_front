import React, {useState} from 'react';
import {cleaning} from "../../data/types/cleanings";

type propsType = {
    todo: cleaning
}

const TodoContainer = ({todo}: propsType) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const toggleCheck = () => {
        setIsChecked(prev => !prev);
    }

    return (
        <div className="relative alert bg-sky-400 shadow-lg">
            <div>
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
