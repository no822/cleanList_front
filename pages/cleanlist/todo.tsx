import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import TodoContainer from "../../components/ui/Todo";
import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {cleaningAction, selectCleanings} from "../../store/cleaningSlice";
import RadialProgress from "../../components/ui/RadialProgress";

const TodoListPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const cleanings = useAppSelector(selectCleanings);
    const orderByPriority = [...cleanings]
        .sort((a, b) => a.priority - b.priority);


    const totalLength = orderByPriority.length;
    const checked = orderByPriority.filter(cleaning => cleaning.isChecked).length;
    const progress = (totalLength === 0) ? 0 : Math.round((checked / totalLength) * 100);


    useEffect(() => {
        if (orderByPriority.length === 0) {
            router.replace('/cleanlist');
            return;
        }
    }, [orderByPriority.length]);

    // 1. priority 를 기준으로 오름차순 정렬 ✓
    // 2. (정렬 후) todolist 렌더링 ✓
    //  - todolist 의 기능들: 순서정렬, 제거, completed
    //  - 추가, 수정(desc)의 경우는? -> 일단 보류

    const checkTodoHandler = (isChecked: boolean, id: string) => {
        dispatch(cleaningAction.checkCleaning({isChecked, id}));
    }


    const getAnimateClassByIndex = (index: number, length: number) => {
        const milliseconds = new Array(length)
            .fill(undefined)
            .map((_, i) => `animate-[slide_1s_ease-in-out] todo-${(i+1) * 50}`);

        return milliseconds[index];
    }


    return (
        <div className='w-full overflow-auto'>
            <div className={`mx-0 sticky top-0 z-50
                            bg-slate-100 w-full py-2 
                            flex justify-between items-center`}>
                <div>
                    {progress >= 0 && progress < 30 && '30% 이하'}
                    {progress >= 30 && progress < 50 && '30% 이상'}
                    {progress >= 50 && progress < 70 && '50% 이상'}
                    {progress >= 70 && progress < 90 && '70% 이상'}
                    {progress >= 90 && progress < 100 && '90% 이상'}
                </div>
                <RadialProgress nextValue={progress}/>
            </div>
            <ul className="flex flex-col gap-2 w-full pt-4 px-2">
                {orderByPriority.length > 0 &&
                    orderByPriority.map((cleaning, i) => {
                        const animationClass = `${getAnimateClassByIndex(i, orderByPriority.length)}`;
                        return (
                            <TodoContainer
                                animate={animationClass}
                                key={cleaning.id}
                                onCheck={checkTodoHandler}
                                todo={cleaning}
                            />
                        );
                    })}
            </ul>
        </div>
    );
};

export default TodoListPage;
