import React from 'react';
import Button from "../../components/ui/Button";
import Drag from "../../components/drag/Drag";

const Index = () => {

    const addAreaHandler = () => {

    };

    const editAreaHandler = () => {

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
            <div className="card-body pb-0 flex flex-col justify-between">
                <div className='edit-area bg-gray-300 p-2 h-full overflow-y-hidden'>
                    <Drag />
                </div>
                <div className="actions flex justify-center gap-2">
                    <Button onClick={addAreaHandler} className='h-full max-w-screen-xl'>영역 추가</Button>
                    <Button onClick={editAreaHandler} className='h-full max-w-screen-xl'>수정</Button>
                </div>
            </div>
            <div className='mb-8 pr-8 pl-8 mt-2 max-h-28'>
                <div className="divider select-none">청소 기록</div>
                <ul className='overflow-auto h-24 w-full flex flex-col items-center'>
                    <ul>7일 전에 <span className='text-red-500'>주방</span>을 청소하였습니다.</ul>
                    <ul>10일 전에 <span className='text-red-500'>욕실</span>을 청소하였습니다.</ul>
                    <ul>10일 전에 <span className='text-red-500'>욕실</span>을 청소하였습니다.</ul>
                    <ul>10일 전에 <span className='text-red-500'>욕실</span>을 청소하였습니다.</ul>
                    <ul>10일 전에 <span className='text-red-500'>욕실</span>을 청소하였습니다.</ul>
                </ul>

            </div>
        </div>
    );
};

export default Index;
