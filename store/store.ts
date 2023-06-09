import {configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cleaningSlice from "./cleaningSlice";
import authSlice from "./authSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cleaning'],
    blacklist: ['auth']
};

const reducers = combineReducers({
    cleaning: cleaningSlice, auth: authSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);


const middlewares = (process.env.NODE_ENV === 'production') ? [thunk] : [thunk, logger];
const store = configureStore({
    reducer: persistedReducer,
    middleware: [...middlewares]
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;
