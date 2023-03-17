import React, {useState} from 'react';

type propsType = {
    isShow: boolean;
    title: string;
    informTxt: string;
    btnTxt: string;
    modalBtnClickHandler: () => void;
}

const InformModal = ({modalBtnClickHandler, isShow, title, informTxt, btnTxt}: propsType) => {
    const activeClass = "pointer-events-auto visible opacity-100";

    const btnClickHandler = () => {
        modalBtnClickHandler();
    }

    return (
        <>
            <div className={`modal ${isShow ? activeClass : ''}`}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4 break-keep">{informTxt}</p>
                    <div className="modal-action flex justify-center">
                        <label
                            onClick={btnClickHandler}
                            htmlFor="my-modal"
                            className="btn btn-wide"
                        >{btnTxt}</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InformModal;
