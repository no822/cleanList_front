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
                    <p className="py-4">{informTxt}</p>
                    <div className="modal-action">
                        <label
                            onClick={btnClickHandler}
                            htmlFor="my-modal"
                            className="btn"
                        >{btnTxt}</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InformModal;
