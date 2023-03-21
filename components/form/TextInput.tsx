import React, {ChangeEvent} from 'react';

type propsType = {
    labelTxt: string;
    inputType?: string;
    placeHolder: string;
    onChange: (e: ChangeEvent) => void;
    validateMsg?: string;
};

const TextInput = ({labelTxt, inputType = 'text', placeHolder, onChange, validateMsg = ''}: propsType) => {
    return (
        <div className="relative form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{labelTxt}</span>
            </label>
            <input type={inputType} onChange={onChange} placeholder={placeHolder} className="input input-bordered w-full max-w-xs"/>
            <div className='absolute top-20 pt-2 pl-2 text-red-500 bg-transparent'>{validateMsg}</div>
        </div>
    );
};

export default TextInput;
