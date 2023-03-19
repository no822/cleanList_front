import React from 'react';

type propsType = {
    onClick: () => void;
    className?: string;
}

const CloseButton = ({onClick, className}: propsType) => {
    return (
        <label htmlFor="close-button"
               onClick={onClick}
               className={`absolute right-5 top-3 ${className}`}
        >
            ✕
        </label>
    );
};

export default CloseButton;
