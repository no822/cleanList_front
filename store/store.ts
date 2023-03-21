import {configureStore, ThunkAction, Action, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import cleaningReducer from './cleaningSlice';
import authReducer from './authSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
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


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger]
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
