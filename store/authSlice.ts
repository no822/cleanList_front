import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {getToken} from "../utils/token";


type stateType = {
    isAuth: boolean,
    token: string,
    userInfo: {email: string}
};

const token = getToken();

const initialValue: stateType = {
    isAuth: token ? true : false,
    token: token ? token : '',
    userInfo: {email: ''}
};

const authSlice = createSlice({
    initialState: initialValue,
    name: 'auth',
    reducers: {
        setToken(state, action) {
           const {token, email} = action.payload;
           state.isAuth = true;
           state.token = token;
           state.userInfo.email = email;
        },
        logout(state) {
            state.isAuth = false;
            state.token = '';
        }
    }
});


export const authAction = authSlice.actions;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;

export default authSlice.reducer;
