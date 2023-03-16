import React from 'react';
import {oneInMore} from "../../data/types/questions";
import Card from "../ui/Card";
import Button from "../ui/Button";

export type targetType =  'area' | 'difficulty';
type propsType = oneInMore & {
    answerQuestion: (value: string, target: targetType) => void;
};

const OneInMoreQuestion = ({...props}: propsType) => {
    const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, i: number) => {
        const selectedValue = props.values[i];
        props.answerQuestion(selectedValue, props.target);
    }

    return (
        <Card className='h-4/5 relative top-5'>
            <h2 className='leading-7 text-lg font-bold break-keep text-center'>{props.text}</h2>
            <div className={`
                h-4/5 mt-5 
                overflow-y-auto overflow-x-hidden
                grid grid-cols-2 gap-3
                place-content-center`}
            >
                {props.options.map((text, i) =>
                    <Button
                        className=' btn-lg h-20 w-full p-0'
                        key={i} clickHandler={(_) => buttonClickHandler(_, i)}
                    >
                        {text}
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default OneInMoreQuestion;
