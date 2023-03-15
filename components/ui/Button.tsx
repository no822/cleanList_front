import React, {ReactNode} from 'react';

type propType = {
    clickHandler: () => void,
    className?: string,
    children: ReactNode
};

const Button = ({clickHandler, className, children}: propType) => {
    const buttonText = children || 'button';
    return (
        <button onClick={clickHandler} className={`btn ${className}`}>{buttonText}</button>
    );
};

export default Button;
