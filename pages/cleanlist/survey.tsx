import {useRouter} from "next/router";
import React, {useEffect, useState, useRef} from 'react';
import {useAppDispatch} from "../../store/hooks";
import {cleaningAction} from "../../store/cleaningSlice";

import preQuestionsData from "../../data/questions/preQuestions";
import commonQuestionsData from "../../data/questions/common";
import bedroomQuestionsData from "../../data/questions/bedroom";
import bathroomquestionsData from "../../data/questions/bathroom";
import kitchenquestionsData from "../../data/questions/kitchen";
import verandaQuestionsData from "../../data/questions/veranda";

import commonCleanings from "../../data/cleanings/common";
import bedroomCleanings from "../../data/cleanings/bedroom";
import bathroomCleanings from "../../data/cleanings/bathroom";
import kitchenCleanings from "../../data/cleanings/kitchen";
import verandaCleanings from "../../data/cleanings/veranda";

import InformModal from "../../components/ui/InformModal";
import BarProgress from "../../components/ui/BarProgress";
import YesOrNoQuestion from "../../components/questions/YesOrNoQuestion";
import OneInMoreQuestion from "../../components/questions/OneInMoreQuestion";

import {cleaning} from "../../data/types/cleanings";
import {
    isYesOrNo,
    isOneInMore,
    questionTypes,
    yesOrNo
} from "../../data/types/questions";


/**
 * preQuestions: 후속 질문들을 결정하는 질문들
 * ex: 어느 영역(침실, 주방, 욕실 등)에 대한 질문을 할 것인지, 쉬운 난이도의 청소를 추가하는 질문만 할 것인지
 *
 * mainQuestions: 특정 청소를 추가시키는 질문들
 * ex: 욕실 벽면 청소를 하실 건가요? -> yes 선택시 <욕실벽면청소> 추가
 */

const SurveyPage = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [preQuestions, setPrequestions] = useState<Array<questionTypes>>(preQuestionsData);
    const [mainQuestions, setMainQuestions] = useState<Array<questionTypes>>([
        ...commonQuestionsData,
        ...bedroomQuestionsData,
        ...bathroomquestionsData,
        ...kitchenquestionsData,
        ...verandaQuestionsData
    ]);
    const [progressTxt, setProgressTxt] = useState<string>('사전질문 중입니다..');
    const [currentQuestion, setCurrentQuestion] = useState<questionTypes>();
    const [isPrequestionProcedure, setIsPrequestionProcedure] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [area, setArea] = useState<'bedroom' | 'bathroom' | 'kitchen' | 'veranda' | ''>('');

    const currentIndex = useRef(0);
    const answeredMainQuestion = mainQuestions.filter(q => q.answer !== undefined).length;
    const remainMainQuestion = mainQuestions.length - answeredMainQuestion;
    const isCompleteSurvey = remainMainQuestion === 0;


    useEffect(() => {
       const question = preQuestions[currentIndex.current];
       setCurrentQuestion(question);
    }, [preQuestions]);


    useEffect(() => {
        const [areaQuestion, difficultyQuestion] = preQuestions;
        const area = areaQuestion.answer as 'bedroom' | 'bathroom' | 'kitchen' | 'veranda';
        const difficulty = difficultyQuestion.answer;
        const isEndPreQuestion = area && difficulty; // 사전질문 2개 모두 답변한 경우

        if (isEndPreQuestion) {
            const filtered = mainQuestions
                .filter(q => q.area === area || q.area === 'common')
                .filter(q => {
                    if (difficulty === 'easy') {
                        return q.difficulty === 'easy';
                    }else if (difficulty === 'hard') {
                        return q.difficulty === 'easy' || q.difficulty === 'hard';
                    }else {
                        return true;
                    }
                });

            currentIndex.current = 0;
            setIsPrequestionProcedure(false);
            setMainQuestions(filtered);
            setArea(area);
        }
    }, [preQuestions]);


    useEffect(() => {
        if (!isPrequestionProcedure) {
            setProgressTxt(
                isCompleteSurvey
                    ? '설문완료!'
                    : `${remainMainQuestion}개의 질문이 남았습니다.`);
            setCurrentQuestion(mainQuestions[currentIndex.current]);
        }
    }, [mainQuestions, isCompleteSurvey]);


    const recordAnswer = (answer: string | boolean) => {
        const question = (isPrequestionProcedure)
            ? {...preQuestions[currentIndex.current]}
            : {...mainQuestions[currentIndex.current]};
        question.answer = answer;
        nextQuestion(question);
    };


    const nextQuestion = (question: questionTypes) => {
        const newQuestions = (isPrequestionProcedure)
            ? [...preQuestions]
            : [...mainQuestions];
        const isQuestion = newQuestions[currentIndex.current] != null;
        if (isQuestion) {
            newQuestions[currentIndex.current] = question;
            currentIndex.current += 1;
            (isPrequestionProcedure)
                ? setPrequestions(newQuestions)
                : setMainQuestions(newQuestions);
        }
    };


    useEffect(() => {
        if (isCompleteSurvey) {
            setIsModalOpen(true);
        }
    }, [isCompleteSurvey]);


    const generateTodoList = () => {
        const cleaningsData = [
            ...commonCleanings,
            ...bedroomCleanings,
            ...bathroomCleanings,
            ...kitchenCleanings,
            ...verandaCleanings,
        ];

        const answeredQuestions = (mainQuestions as Array<yesOrNo>)
            .filter(q => isYesOrNo(q))
            .filter(q => q.answer);

        const cleaningsIds = answeredQuestions.map(q => q.cleaningId);

        const additionalCleaningIds = answeredQuestions
            .filter(q => q.additionalCleaning)
            .map(q => q.cleaningId);

        const uniqueIds = Array.from(
            new Set([...cleaningsIds, ...additionalCleaningIds])
        );

        const cleaningTodoList: Array<cleaning> = cleaningsData
            .filter(c => uniqueIds.includes(c.id) || c.isDefault);

        const orderByPriority = cleaningTodoList
            .sort((a, b) => a.priority - b.priority);

        dispatch(cleaningAction.setCleanings(orderByPriority));
        dispatch(cleaningAction.setArea(area));

        router.push('/cleanlist/todo');
    }


    return (
        <>
            <BarProgress value={answeredMainQuestion} maxValue={mainQuestions.length} />
            <p className='absolute w-60 translate-x-1/2 right-1/2 top-11 text-center'>{progressTxt}</p>
            <div className='h-full w-full flex justify-center items-center'>
                {isYesOrNo(currentQuestion) &&
                    <YesOrNoQuestion
                        answerQuestion={recordAnswer}
                        text={currentQuestion.text}
                        difficulty={currentQuestion.difficulty}
                        cleaningId={currentQuestion.cleaningId}
                        area={currentQuestion.area}
                    />}

                {isOneInMore(currentQuestion) &&
                    <OneInMoreQuestion
                        answerQuestion={recordAnswer}
                        text={currentQuestion.text}
                        difficulty={currentQuestion.difficulty}
                        target={currentQuestion.target}
                        options={currentQuestion.options}
                        values={currentQuestion.values}
                        area={currentQuestion.area}
                    />}
            </div>

            <InformModal
                isShow={isModalOpen}
                title='설문이 완료되었습니다.'
                informTxt='청소시작 버튼을 눌러서 투두리스트를 완성하세요!'
                btnTxt='청소 시작!'
                onClick={generateTodoList}
            />
        </>
    );
};

export default SurveyPage;
