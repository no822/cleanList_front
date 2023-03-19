import React, {MouseEventHandler, ReactNode} from 'react';

type propType = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string,
    children: ReactNode
};

const Button = ({onClick = () => {}, className, children}: propType) => {
    const buttonText = children || 'button';
    return (
        <button onClick={onClick} className={`btn break-keep ${className}`}>{buttonText}</button>
    );
};

export default Button;
