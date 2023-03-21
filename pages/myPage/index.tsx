import React from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {authAction} from "../../store/authSlice";
import {deleteToken} from "../../utils/token";
import {useRouter} from "next/router";
import {signOut} from "@firebase/auth";
import auth from '../../network/auth';

const Index = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const logoutHandler = () => {
        // 리덕스
        signOut(auth).then(_ => {
            dispatch(authAction.logout());
            deleteToken();
            router.replace('/');
        });
    };

    return <>
        <ul className="menu  w-full p-5 shadow bg-base-100 mb-6 rounded-box">
            <li><a className='active:bg-blue-500'>청소기록</a></li>
            <div className="divider my-2"></div>

            <li onClick={logoutHandler}><a className='active:bg-blue-500'>로그아웃</a></li>
            <div className="divider my-2"></div>
        </ul>
    </>
};

export default Index;
