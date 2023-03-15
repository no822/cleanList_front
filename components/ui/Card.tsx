import React, {ReactNode} from 'react';

type props = {
    title: string;
    children: ReactNode;
}

const Card = ({title, children}: props) => {
    const titleTxt = title || '';
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{titleTxt}</h2>
                <p className="whitespace-pre-line">{children}</p>
            </div>
        </div>
    );
};

export default Card;
