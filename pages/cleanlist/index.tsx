import React from 'react';
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Link from "next/link";

const index = () => {
    return (
        <>
            <div className='w-full flex flex-col items-center justify-between break-keep'>
                <Card title='안내'>
                    {`청소가 귀찮은 사람들도 청소를 잘 할 수 있는 투두리스트 생성기! 😎 \n
                     몇가지 질문에 대답하여 청소 투두리스트를 생성해보세요.`}
                </Card>
                <div className='h-full flex items-center'>
                    <Link href='/cleanlist/survey'>
                        <Button className='btn-lg btn-wide'>
                            질문에 대답하기!
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default index;
