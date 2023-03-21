import React, {ChangeEvent} from 'react';

type propsType = {
    labelTxt: string;
    inputType?: string;
    placeHolder: string;
    onChange: (e: ChangeEvent) => void;
};

const TextInput = ({labelTxt, inputType = 'text', placeHolder, onChange}: propsType) => {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{labelTxt}</span>
            </label>
            <input type={inputType} onChange={onChange} placeholder={placeHolder} className="input input-bordered w-full max-w-xs"/>
        </div>
    );
};

export default TextInput;
