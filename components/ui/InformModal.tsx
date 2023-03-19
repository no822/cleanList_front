import React from 'react';

type propsType = {
    isShow: boolean;
    title: string;
    informTxt: string;
    btnTxt: string;
    onClick: () => void;
    isClose?: boolean;
    onClose?: () => void;
}

const InformModal = ({
    onClick,
    isShow,
    title,
    informTxt,
    btnTxt,
    isClose = false,
    onClose = () => {},
}: propsType) => {
    const activeClass = "pointer-events-auto visible opacity-100";

    const btnClickHandler = () => {
        onClick();
    }

    return (
        <>
            <div className={`modal ${isShow ? activeClass : ''}`}>
                <div className="modal-box">
                    {isClose &&
                        <label htmlFor="inform-modal" onClick={onClose}
                            className="btn btn-sm absolute right-2 top-2">
                          ✕
                        </label>}
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4 break-keep">{informTxt}</p>
                    <div className="modal-action flex justify-center">
                        <label
                            onClick={btnClickHandler}
                            htmlFor="inform-modal"
                            className="btn btn-wide h-16 text-lg"
                        >{btnTxt}</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InformModal;
