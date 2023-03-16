import React, {ReactNode} from 'react';

type props = {
    title?: string;
    className?: string;
    children: ReactNode;
}

const Card = ({title, children, className = ''}: props) => {
    const titleTxt = title || '';
    return (
        <div className={`card w-full bg-base-100 shadow-xl ${className}`}>
            <div className="card-body p-5">
                <h2 className="card-title pt-3">{titleTxt}</h2>
                <div className="whitespace-pre-line h-full">{children}</div>
            </div>
        </div>
    );
};

export default Card;
