import React from 'react';
import YesOrNo from "../../../components/questions/YesOrNo";
import Layout from "../../../components/layout/Layout";
import Card from "../../../components/ui/Card";
import OneInMore from "../../../components/questions/OneInMore";

const Index = () => {
    return (
        <Layout>
            <progress className="progress absolute progress-primary w-1/2 w-full translate-x-1/2 right-1/2" value="40" max="100"></progress>
            <p className='fixed w-60 translate-x-1/2 right-1/2 top-28 text-center'>n개의 질문이 남았습니다.</p>
            <div className='h-full w-full flex justify-center items-center'>
                <YesOrNo text={'방해되는 물건들을 정리할까요?'} difficulty={'hard'} cleaningId={'c1'} />
                {/*<OneInMore*/}
                {/*    text={'어느 구역을 청소하시겠어요'}*/}
                {/*    difficulty={'very hard'}*/}
                {/*    target={'area'}*/}
                {/*    options={['주방', '욕실', '침실']}*/}
                {/*    values={['kitchen', 'bathroom', 'bedroom']}*/}
                {/*/>*/}
            </div>
        </Layout>
    );
};

export default Index;
