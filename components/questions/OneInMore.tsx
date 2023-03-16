import React from 'react';
import {oneInMore} from "../../data/types/questions";
import Card from "../ui/Card";

type propsType = oneInMore & {

};

const OneInMore = ({...props}: propsType) => {
    console.log(props)
    return (
        <Card className=''>

        </Card>
    );
};

export default OneInMore;
