import {createSlice} from "@reduxjs/toolkit";
import {cleaning} from "../data/types/cleanings";
import {RootState} from "./store";

type stateType = {
    todoCleanings: Array<cleaning>;
    area: 'bedroom' | 'bathroom' | 'kitchen' | 'veranda' | '';
};

const initialValue: stateType = {
    todoCleanings: [],
    area: '',
};

const cleaningSlice = createSlice({
    initialState: initialValue,
    name: 'cleaning',
    reducers: {
        setCleanings(state, action) {
            state.todoCleanings = action.payload;
        },
        setArea(state, action) {
            state.area = action.payload;
        },
        checkCleaning(state, action) {
            const id = action.payload.id;
            const isChecked = action.payload.isChecked;
            const targetCleaning = state.todoCleanings.find(cleaning => cleaning.id === id);
            if (targetCleaning) {
                targetCleaning.isChecked = isChecked;
            }
        }

    }
});

export const cleaningAction = cleaningSlice.actions;

export const selectCleanings = (state: RootState) => state.cleaning.todoCleanings;
export const selectArea = (state: RootState) => state.cleaning.area;

export default cleaningSlice.reducer;
