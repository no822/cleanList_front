import React from 'react';
import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const index = () => {
    return (
        <Layout>
            <div className='w-full flex flex-col items-center justify-between'>
                <Card title='안내'>
                    {`청소가 귀찮은 사람들도 청소를 잘 할 수 있는 투두리스트 생성기! 😎 \n
                    청소시작 버튼을 눌러서 몇가지 질문에 대답하여 청소 투두리스트를 생성해보세요.`}
                </Card>
                <Button
                    className='btn-lg btn-wide'
                    clickHandler={() => console.log('click button')}>청소 시작!</Button>
            </div>
        </Layout>
    );
};

export default index;
