import React from 'react';

type propsType = {
    value: number;
    maxValue: number;
};

const BarProgress = ({value, maxValue}: propsType) => {
    return (
        <progress
            className={`progress absolute 
                    px-5 w-4/5 w-full progress progress-info 
                    translate-x-1/2 right-1/2 `}
            value={value}
            max={maxValue}
        ></progress>
    );
};

export default BarProgress;
