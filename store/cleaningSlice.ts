import {createSlice} from "@reduxjs/toolkit";
import {cleaning} from "../data/types/cleanings";
import {RootState} from "./index";

type stateType = {
    todoCleanings: Array<cleaning>;
};

const initialValue: stateType = {
    todoCleanings: [],
};

const cleaningSlice = createSlice({
    initialState: initialValue,
    name: 'cleaning',
    reducers: {
        setCleanings(state, action) {
            state.todoCleanings = action.payload;
        }
        // 추가
        // 제거
        // 순서변경
    }
});

export const cleaningAction = cleaningSlice.actions;
export const selectCleanings = (state: RootState) => state.cleaning.todoCleanings;
export default cleaningSlice.reducer;
