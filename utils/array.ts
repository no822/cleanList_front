import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable";

export const removeAtIndex = <T>(array: Array<T>, index: number) => {
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertAtIndex = <T>(array: Array<T>, index: number, item: T) => {
    return [...array.slice(0, index), item, ...array.slice(index)];
};

export const arrayMove = <T>(array: Array<T>, oldIndex: number, newIndex: number) => {
    return dndKitArrayMove(array, oldIndex, newIndex);
};
