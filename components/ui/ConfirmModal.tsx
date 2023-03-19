import React from 'react';

type propsType = {
    isShow: boolean;
    title: string;
    informTxt: string;
    confirmTxt: string;
    refuseTxt: string;
    onConfirm: () => void;
    isClose?: boolean;
    onClose?: () => void;
    onRefuse: () => void;
}

const InformModal = ({
     isShow,
     title,
     informTxt,
     confirmTxt,
     refuseTxt,
     isClose = false,
     onConfirm,
     onRefuse,
     onClose = () => {},
}: propsType) => {
    const activeClass = "pointer-events-auto visible opacity-100";

    const btnClickHandler = () => {
        onConfirm();
    }

    return (
        <>
            <div className={`modal ${isShow ? activeClass : ''}`}>
                <input type="checkbox" id="close-modal" className="modal-toggle" />
                <div className="modal-box" html-for="close-modal">
                    {isClose &&
                        <label htmlFor="confirm-modal" onClick={onClose}
                               className="btn btn-sm absolute right-2 top-2">
                          ✕
                        </label>}
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4 break-keep">{informTxt}</p>
                    <div className="modal-action flex justify-center">
                        <label
                            onClick={btnClickHandler}
                            htmlFor="confirm-modal"
                            className="btn h-16 text-lg"
                        >{confirmTxt}</label>
                        <label
                            onClick={onRefuse}
                            htmlFor="confirm-modal"
                            className="btn  h-16 text-lg"
                        >{refuseTxt}</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InformModal;
