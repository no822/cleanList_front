import React from 'react';
import Button from "../../components/ui/Button";
import Drag from "../../components/drag/Drag";

const Index = () => {

    const addAreaHandler = () => {

    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
            <div className="card-body pb-0 flex flex-col justify-between">
                <div className='edit-area bg-gray-300 p-2 h-full overflow-y-hidden'>
                    <Drag />
                </div>
                <div className="actions flex justify-center">
                    <Button onClick={addAreaHandler} className='btn-wide h-full max-w-screen-xl'>영역 추가</Button>
                </div>
            </div>
            <div className='mb-8 pr-8 pl-8 mt-2 max-h-28 overflow-auto flex flex-col items-center'>
                <div className="divider select-none">청소 기록</div>
                <div>7일 전에 <span className='text-red-500'>주방</span>을 청소하였습니다.</div>
                <div>10일 전에 <span className='text-red-500'>욕실</span>을 청소하였습니다.</div>
                <div>10일 전에 <span className='text-red-500'>욕실</span>을 청소하였습니다.</div>

            </div>
        </div>
    );
};

export default Index;
