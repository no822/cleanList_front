import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import TodoContainer from "../../components/ui/Todo";
import {useAppSelector} from "../../store/hooks";
import {selectCleanings} from "../../store/cleaningSlice";
import RadialProgress from "../../components/ui/RadialProgress";

const TodoList = () => {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const cleanings = useAppSelector(selectCleanings);
    const orderByPriority = [...cleanings]
        .sort((a, b) => a.priority - b.priority);

    useEffect(() => {
        if (orderByPriority.length === 0) {
            router.replace('/cleanlist');
            return;
        }
    }, [router]);

    console.log('redux values', cleanings, orderByPriority);
    // 1. priority 를 기준으로 오름차순 정렬 ✓
    // 2. priority 가 같은 cleaning 이 있다면 유저가 정렬할 수 있는 단계 제공
    // 3. (정렬 후) todolist 렌더링
    //  - todolist 의 기능들: 순서정렬, 제거, completed
    //  - 추가, 수정(desc)의 경우는? -> 일단 보류

    return (
        <div className='w-full'>
            <div className='flex justify-end pb-4'>
                <RadialProgress nextValue={progress}/>
            </div>
            <ul className='flex flex-col gap-2 w-full pb-4'>
                {orderByPriority.length > 0 &&
                    orderByPriority.map(cleaning =>
                        <TodoContainer key={cleaning.id} todo={cleaning}/>)}
            </ul>
        </div>
    );
};

export default TodoList;
