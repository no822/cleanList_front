import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useAppSelector} from "../../store/hooks";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import {selectCleanings} from "../../store/cleaningSlice";
import ConfirmModal from "../../components/ui/ConfirmModal";

const Index = () => {
    const router = useRouter();
    const cleanings = useAppSelector(selectCleanings);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const goToSurvey = () => {
        if (cleanings.length) {
            setIsModalOpen(true);
            return;
        }
        router.push('/cleanlist/survey');
    };


    const goToCleaning = () => router.push('/cleanlist/todo');
    const closeModal = () => setIsModalOpen(false);
    const refuseHandler = () => router.push('/cleanlist/survey');

    return (
        <>
            <div className='w-full flex flex-col items-center justify-between'>
                <Card title='안내' className='break-keep'>
                    {`청소가 귀찮은 사람들도 청소를 잘 할 수 있는 투두리스트 생성기! 😎 \n
                     몇가지 질문에 대답하여 청소 투두리스트를 생성해보세요. \n
                     집의 특정구역을 청소한지 얼마나 오래됐는지 도면 메뉴에서 확인할 수 있습니다.`}
                </Card>
                <div className='h-full flex items-center'>
                    <Button onClick={goToSurvey} className='btn-lg btn-wide'>
                        질문에 대답하기!
                    </Button>
                </div>
            </div>

            <ConfirmModal
                isShow={isModalOpen}
                title='이미 청소중인 투두리스트가 있습니다.'
                informTxt='해당 투두리스트로 계속 진행할까요?'
                confirmTxt='투두리스트로 이동'
                refuseTxt='질문에 대답하기'
                isClose={true}
                onConfirm={goToCleaning}
                onClose={closeModal}
                onRefuse={refuseHandler}
            />
        </>
    );
};

export default Index;
