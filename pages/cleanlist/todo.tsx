import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import TodoContainer from "../../components/ui/Todo";
import {useAppSelector, useAppDispatch} from "../../store/hooks";
import {cleaningAction, selectArea, selectCleanings} from "../../store/cleaningSlice";
import RadialProgress from "../../components/ui/RadialProgress";
import ConfirmModal from "../../components/ui/ConfirmModal";
import {
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    TouchSensor,
    useDroppable,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import {arrayMove, SortableContext, sortableKeyboardCoordinates} from "@dnd-kit/sortable";
import {restrictToFirstScrollableAncestor, restrictToVerticalAxis} from "@dnd-kit/modifiers";


export const mapToName = {
    bedroom: '안방',
    bathroom: '욕실',
    veranda: '베란다',
    kitchen: '주방'
};

const dragId = 'todoDraggable';

const TodoListPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();


    const cleanings = useAppSelector(selectCleanings);
    const area = useAppSelector(selectArea);


    const [isDeleteModal, setDeleteModal] = useState<boolean>(false);
    const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

    const totalLength =cleanings.length;
    const checked =cleanings.filter(cleaning => cleaning.isChecked).length;
    const progress = (totalLength === 0) ? 0 : Math.round((checked / totalLength) * 100);


    useEffect(() => {
        if (cleanings.length === 0) {
            router.replace('/cleanlist');
            return;
        }
    }, [cleanings.length]);


    const checkTodoHandler = (isChecked: boolean, id: string) => {
        dispatch(cleaningAction.checkCleaning({isChecked, id}));
    }


    const getAnimateClassByIndex = (index: number, length: number) => {
        const milliseconds = new Array(length)
            .fill(undefined)
            .map((_, i) => `fade-in-${5*i}`);
        return milliseconds[index];
    }


    const mappingAreaName = (area: keyof typeof mapToName) => mapToName[area];


    const openDeleteModal = (id: string) => {
        setDeleteModal(true);
        setDeleteTargetId(id);
    }


    const deleteTodoHandler = () => {
        if (deleteTargetId) {
            dispatch(cleaningAction.deleteCleaning(deleteTargetId));
            setDeleteModal(false);
        }
    };


    const saveCleaningLog = () => {
        console.log('save log');
    };


    const CompleteBtn = () =>
         <button onClick={saveCleaningLog} className='btn btn-xs btn-info text-zinc-100'>완료</button>;

    const { setNodeRef } = useDroppable({id: dragId});

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );


    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (!over) {
            return;
        }
        if (active.id !== over.id) {
            const oldIndex = active.data.current!.sortable.index;
            const newIndex = over.data.current?.sortable.index || 0;
            const newCleanings = arrayMove([...cleanings], oldIndex, newIndex);
            dispatch(cleaningAction.setCleanings(newCleanings))
        }
    };

    return (
        <div className='w-full overflow-auto'>
            <div className={`mx-0 sticky top-0 z-50 
                            bg-slate-100 w-full pb-2  
                            flex justify-between items-center`}
            >
                <div className='text-sm break-keep flex flex-col pl-2'>
                    <h3 className='text-gray-500'>영역: {area !== "" && mappingAreaName(area)}</h3>
                    <div className='italic leading-loose'>
                        {progress >= 0 && progress < 30 && '일단 간단한 것부터 해봅시다!'}
                        {progress >= 30 && progress < 50 && '일단 시작하니 의욕이 생기지 않나요?'}
                        {progress >= 50 && progress < 70 && '벌써 절반이나 청소했어요!'}
                        {progress >= 70 && progress < 90 && '이제 꽤 깨끗해지지 않았나요?'}
                        {progress >= 90 && progress < 100 && '거의 끝나갑니다. 힘내세요.'}
                        {progress === 100 &&
                            <div className='leading-loose'>
                                완료버튼을 클릭해주세요. <CompleteBtn />
                            </div>}
                    </div>
                </div>
                <div className='pr-2'>
                    <RadialProgress nextValue={progress}/>
                </div>
            </div>

            <DndContext sensors={sensors}
                        modifiers={[restrictToVerticalAxis]}
                        onDragEnd={handleDragEnd}
            >
                <SortableContext items={cleanings} id={dragId}>
                    <ul ref={setNodeRef} className="z-50 flex flex-col gap-5 w-full pt-4 px-2">
                        {cleanings.map((cleaning, i) => {
                            const animationClass = `${getAnimateClassByIndex(i,cleanings.length)}`;
                            return (
                                <TodoContainer
                                    animate={animationClass}
                                    key={cleaning.id}
                                    id={cleaning.id}
                                    onCheck={checkTodoHandler}
                                    todo={cleaning}
                                    onDelete={openDeleteModal}
                                />
                            );
                        })}
                    </ul>

                </SortableContext>
            </DndContext>

            <ConfirmModal
                isShow={isDeleteModal}
                title='청소 삭제'
                informTxt='선택하신 청소를 투두리스트에서 삭제하시겠습니까?'
                confirmTxt='예'
                refuseTxt='아니요'
                onConfirm={deleteTodoHandler}
                onRefuse={() => setDeleteModal(false)}
            />

        </div>
    );
};

export default TodoListPage;
