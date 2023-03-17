import React from 'react';
import Layout from "../../components/layout/Layout";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Link from "next/link";

const index = () => {
    return (
        <Layout>
            <div className='w-full flex flex-col items-center justify-between'>
                <Card title='안내'>
                    {`청소가 귀찮은 사람들도 청소를 잘 할 수 있는 투두리스트 생성기! 😎 \n
                     몇가지 질문에 대답하여 청소 투두리스트를 생성해보세요.`}
                </Card>

                <Link href='/cleanlist/survey'>
                    <Button
                        className='btn-lg btn-wide'
                    >
                        질문에 대답하기!
                    </Button>
                </Link>
            </div>
        </Layout>
    );
};

export default index;
