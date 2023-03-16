import React from 'react';
import { yesOrNo } from "../../data/types/questions";
import Card from "../ui/Card";
import Button from '../ui/Button';

const YesOrNo = ({...props}: yesOrNo) => {
    //
    console.log(props)
    return (
        <Card className='h-3/4'>
            <h2 className='leading-7 text-lg font-bold break-keep text-center'>{props.text}</h2>
            <div className="card-body items-center text-center h-full flex justify-center p-0">
                <div className="card-actions flex">
                    <Button
                        className='btn-lg h-32 w-28 max-w-xs'
                        clickHandler={() => console.log('yes')}>👌네</Button>
                    <Button
                        className='btn-lg h-32 w-28 max-w-xs px-0'
                        clickHandler={() => console.log('no')}>👋아니요</Button>
                </div>
            </div>

        </Card>
    );
};

export default YesOrNo;
