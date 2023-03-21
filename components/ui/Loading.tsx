import React from 'react';
import {Oval} from 'react-loader-spinner';

const Loading = () => {
    return (
        <Oval
            ariaLabel="loading-indicator"
            height={30}
            width={30}
            strokeWidth={5}
            strokeWidthSecondary={4}
            color="#3d66ba"
            secondaryColor="white"
        />
    );
};

export default Loading;
