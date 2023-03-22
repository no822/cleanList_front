/* 출처: https://velog.io/@bepyan/Drag-Touch-%EB%BD%80%EA%B0%9C%EA%B8%B0 */

const isTouchScreen =
    typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;


function registDragEvent({
    onDragChange,
    onDragEnd,
    stopPropagation,
}: {
    onDragChange?: (deltaX: number, deltaY: number) => void;
    onDragEnd?: (deltaX: number, deltaY: number) => void;
    stopPropagation?: boolean;
}) {
    if (isTouchScreen) {
        return {
            onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => {
                if (stopPropagation) touchEvent.stopPropagation();

                console.log('touch')
                const touchMoveHandler = (moveEvent: TouchEvent) => {
                    if (moveEvent.cancelable) moveEvent.preventDefault();


                    const deltaX = moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;
                    const deltaY = moveEvent.touches[0].pageY - touchEvent.touches[0].pageY;
                    onDragChange?.(deltaX, deltaY);
                };

                const touchEndHandler = (moveEvent: TouchEvent) => {
                    const deltaX = moveEvent.changedTouches[0].pageX - touchEvent.changedTouches[0].pageX;
                    const deltaY = moveEvent.changedTouches[0].pageY - touchEvent.changedTouches[0].pageY;
                    onDragEnd?.(deltaX, deltaY);
                    document.removeEventListener('touchmove', touchMoveHandler);
                };

                document.addEventListener('touchmove', touchMoveHandler, { passive: false });
                document.addEventListener('touchend', touchEndHandler, { once: true });
            },
        };
    }

    return {
        onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
            if (stopPropagation) clickEvent.stopPropagation();
            console.log('mouse')

            const mouseMoveHandler = (moveEvent: MouseEvent) => {
                const deltaX = moveEvent.pageX - clickEvent.pageX;
                const deltaY = moveEvent.pageY - clickEvent.pageY;
                onDragChange?.(deltaX, deltaY);
            };

            const mouseUpHandler = (moveEvent: MouseEvent) => {
                const deltaX = moveEvent.pageX - clickEvent.pageX;
                const deltaY = moveEvent.pageY - clickEvent.pageY;
                onDragEnd?.(deltaX, deltaY);
                document.removeEventListener('mousemove', mouseMoveHandler);
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler, { once: true });
        },
    };
}

export default registDragEvent;