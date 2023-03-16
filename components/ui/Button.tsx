import React, {MouseEventHandler, ReactNode} from 'react';

type propType = {
    clickHandler: MouseEventHandler<HTMLButtonElement>;
    className?: string,
    children: ReactNode
};

const Button = ({clickHandler, className, children}: propType) => {
    const buttonText = children || 'button';
    return (
        <button onClick={clickHandler} className={`btn break-keep ${className}`}>{buttonText}</button>
    );
};

export default Button;
