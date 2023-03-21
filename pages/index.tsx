import React, {ChangeEvent, useState, useEffect} from 'react';
import type { NextPage } from 'next'
import {AuthErrorCodes} from "@firebase/auth";
import auth from "../network/auth";
import InformModal from "../components/ui/InformModal";
import TextInput from "../components/form/TextInput";
import {saveToken, getToken} from "../utils/token";
import {useAppDispatch} from "../store/hooks";
import {authAction} from "../store/authSlice";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {useRouter} from "next/router";


const Home: NextPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isModal, setIsModal] = useState<boolean>(false);
    const [modalTxt, setModalTxt] = useState<string>('');


    useEffect(() => {
        const token = getToken();
        if (token && token.length > 0)  {
            router.push('/cleanlist');
        }
    }, []);


    const emailChangeHandler = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setEmail(target.value);
    };


    const passwordChangeHandler = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setPassword(target.value);
    };


    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                user.getIdToken().then(token => {
                    saveToken(token);
                    dispatch(authAction.setToken({email, token}));
                    router.replace('/cleanlist')
                });
            })
            .catch(error => {
                const errorCode = error.code;
                if (errorCode === AuthErrorCodes.INVALID_PASSWORD) {
                    setModalTxt('잘못된 비밀번호입니다.');
                }else if (errorCode === AuthErrorCodes.USER_DELETED) {
                    setModalTxt('유저를 찾을 수 없습니다.');
                } else {
                    setModalTxt('올바른 이메일 또는 패스워드를 입력해주십시오.');
                }
                setIsModal(true);
            })
    };


    return (
        <>
            <form onSubmit={formSubmitHandler}
                  className='w-full flex flex-col justify-center items-center gap-4'>
                <h1 className='prose text-4xl font-bold'>로그인</h1>
                <TextInput onChange={emailChangeHandler} labelTxt='이메일' inputType='email'/>
                <TextInput onChange={passwordChangeHandler } labelTxt='패스워드' inputType='password'/>
                <div className="actions">
                    <input type='submit' className='btn btn-wide mt-4' />
                </div>
            </form >

            <InformModal
                isShow={isModal}
                title='안내'
                informTxt={modalTxt}
                btnTxt='확인'
                onClick={() => setIsModal(false)}
            />
        </>
    )
}

export default Home
