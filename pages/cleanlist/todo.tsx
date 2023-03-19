import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import TodoContainer from "../../components/ui/Todo";
import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {cleaningAction, selectArea, selectCleanings} from "../../store/cleaningSlice";
import RadialProgress from "../../components/ui/RadialProgress";

export const mapToName = {
    bedroom: '안방',
    bathroom: '욕실',
    veranda: '베란다',
    kitchen: '주방'
};

const TodoListPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const cleanings = useAppSelector(selectCleanings);
    const area = useAppSelector(selectArea);
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


    const mappingAreaName = (area: keyof typeof mapToName) => mapToName[area];


    return (
        <div className='w-full overflow-auto'>
            <div className={`mx-0 sticky top-0 z-50
                            bg-slate-100 w-full pb-2 
                            flex justify-between items-center`}>
                <div className='text-sm break-keep flex flex-col pl-2'>
                    <h3 className='text-gray-500'>영역: {area !== "" && mappingAreaName(area)}</h3>
                    <div className='italic'>
                        {progress >= 0 && progress < 30 && '일단 간단한 것부터 해봅시다!'}
                        {progress >= 30 && progress < 50 && '일단 시작하니 의욕이 생기지 않나요?'}
                        {progress >= 50 && progress < 70 && '벌써 절반이나 청소했어요!'}
                        {progress >= 70 && progress < 90 && '이제 꽤 깨끗해지지 않았나요?'}
                        {progress >= 90 && progress < 100 && '거의 끝나갑니다. 힘내세요.'}
                        {progress === 100 && '오른쪽 완료버튼을 눌러주세요.'}
                    </div>
                </div>
                <div className='pr-2'>
                    <RadialProgress nextValue={progress}/>
                </div>
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
