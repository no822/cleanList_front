import React, {useEffect, useState, useRef} from 'react';

import preQuestionsData from "../../../data/questions/preQuestions";
import commonQuestionsData from "../../../data/questions/common";
import bedroomQuestionsData from "../../../data/questions/bedroom";
import bathroomquestionsData from "../../../data/questions/bathroom";
import kitchenquestionsData from "../../../data/questions/kitchen";
import verandaQuestionsData from "../../../data/questions/veranda";

import Layout from "../../../components/layout/Layout";
import YesOrNoQuestion from "../../../components/questions/YesOrNoQuestion";
import OneInMoreQuestion, {targetType} from "../../../components/questions/OneInMoreQuestion";
import {isYesOrNo, isOneInMore, questionTypes, basicQuestion} from "../../../data/types/questions";
import InformModal from "../../../components/ui/InformModal";


/**
 * preQuestions: 후속 질문들을 결정하는 질문들
 * ex: 어느 영역(침실, 주방, 욕실 등)에 대한 질문을 할 것인지, 쉬운 난이도의 청소를 추가하는 질문만 할 것인지
 *
 * mainQuestions: 특정 청소를 추가시키는 질문들
 * ex: 욕실 벽면 청소를 하실 건가요? -> yes 선택시 <욕실벽면청소> 추가
 */

const Index = () => {
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
    const [isPrequestionProccess, setIsPrequestionProcess] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const currentIndex = useRef(0);
    const answeredMainQuestion = mainQuestions.filter(q => q.answer !== undefined).length;
    const remainMainQuestion = mainQuestions.length - answeredMainQuestion;
    const isCompleteSurvey = remainMainQuestion === 0;

    // let isModalOpen = false;

    useEffect(() => {
       const question = preQuestions[currentIndex.current];
       setCurrentQuestion(question);
    }, [preQuestions]);


    useEffect(() => {
        const [areaQuestion, difficultyQuestion] = preQuestions;
        const area = areaQuestion.answer;
        const difficulty = difficultyQuestion.answer;
        const isEndPreQuestion = area && difficulty;

        if (isEndPreQuestion) {
            currentIndex.current = 0;
            setIsPrequestionProcess(false);
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
            setMainQuestions(filtered);
        }
    }, [preQuestions]);


    useEffect(() => {
        if (!isPrequestionProccess) {
            setProgressTxt(isCompleteSurvey ? '설문완료!' : `${remainMainQuestion}개의 질문이 남았습니다.`);
            setCurrentQuestion(mainQuestions[currentIndex.current]);
        }
    }, [mainQuestions, preQuestions]);


    const recordAnswer = (answer: string | boolean) => {
        const question = (isPrequestionProccess) ? {...preQuestions[currentIndex.current]} : {...mainQuestions[currentIndex.current]};
        question.answer = answer;
        nextQuestion(question);
    };


    const nextQuestion = (question: questionTypes) => {
        const newQuestions = (isPrequestionProccess) ? [...preQuestions] : [...mainQuestions];
        const isQuestion = newQuestions[currentIndex.current];
        if (isQuestion) {
            newQuestions[currentIndex.current] = question;
            currentIndex.current += 1;
            (isPrequestionProccess) ? setPrequestions(newQuestions) : setMainQuestions(newQuestions);
        }
    };

    useEffect(() => {
        if (isCompleteSurvey) {
            setIsModalOpen(true);
        }
    }, [isCompleteSurvey]);


    const generateTodoList = () => {
        console.log('청소시작!');
        // objective: 청소 투두리스트 생성하고 화면에 보여주기
        // mainQuestions -> Array<cleaning>
        // 생성한 Array<cleaning>를 리덕스에 넣는다
        // /cleanlist/todo로 라우팅

        // /cleanlist/todo의 useEffect에서 리덕스에서 값을 받아와서 활용
        setIsModalOpen(false);
    }

    return (
        <Layout>
            <progress
                className={`progress absolute 
                    px-5 w-4/5 w-full progress progress-info 
                    translate-x-1/2 right-1/2 `}
                value={answeredMainQuestion}
                max={mainQuestions.length}
            ></progress>
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
                modalBtnClickHandler={generateTodoList}
            />
        </Layout>
    );
};

export default Index;
