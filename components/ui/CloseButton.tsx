import React from 'react';

type propsType = {
    onClick: () => void;
    className?: string;
}

const CloseButton = ({onClick, className}: propsType) => {
    return (
        <button
               onClick={onClick}
               className={`z-50 absolute right-5 top-3 ${className}`}
        >
            ✕
        </button>
    );
};

export default CloseButton;
