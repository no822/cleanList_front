import React from 'react';
import {oneInMore} from "../../data/types/questions";
import Card from "../ui/Card";
import Button from "../ui/Button";

type propsType = oneInMore & {

};

const OneInMore = ({...props}: propsType) => {
    console.log(

    )
    return (
        <Card className=''>
            <h2 className='leading-7 text-lg font-bold break-keep text-center'>{props.text}</h2>
            <div className={`
                mt-5
                h-80 overflow-y-scroll 
                grid grid-cols-2 
                place-content-start gap-4`}
            >
                {props.options.map((text, i) =>
                    <Button
                        className=' btn-lg h-20 w-full'
                        key={i} clickHandler={() => console.log('btn click')}
                    >
                        {text}
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default OneInMore;
