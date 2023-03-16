import React, {ReactNode} from 'react';

type props = {
    title?: string;
    className?: string;
    bodyClass?: string;
    children: ReactNode;
}

const Card = ({title, children, className = '', bodyClass = ''}: props) => {
    const titleTxt = title || '';
    return (
        <div className={`card w-full bg-base-100 shadow-xl ${className}`}>
            <div className="card-body p-4 h-full">
                <h2 className="card-title pt-3">{titleTxt}</h2>
                <div className={`whitespace-pre-line h-full ${bodyClass}`}>{children}</div>
            </div>
        </div>
    );
};

export default Card;
