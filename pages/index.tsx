import React, {ChangeEvent, useState, useEffect} from 'react';
import type { NextPage } from 'next'
import {AuthErrorCodes, createUserWithEmailAndPassword} from "@firebase/auth";
import auth from "../network/auth";
import InformModal from "../components/ui/InformModal";
import TextInput from "../components/form/TextInput";
import {saveToken, getToken} from "../utils/token";
import {useAppDispatch} from "../store/hooks";
import {authAction} from "../store/authSlice";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {useRouter} from "next/router";
import {validateEmail, validatePassword} from "../utils/inputValidate";
import Loading from "../components/ui/Loading";
import Button from "../components/ui/Button";


const Home: NextPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
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


    const passwordConfirmChangeHandler = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setPasswordConfirm(target.value);
    };


    const setErrorMsg = (code: string) => {
        if (code === AuthErrorCodes.INVALID_PASSWORD) {
            setModalTxt('영문자, 숫자가 포함된 8글자 이상의 글자를 입력해주세요.');
        }else if (code === AuthErrorCodes.USER_DELETED) {
            setModalTxt('유저를 찾을 수 없습니다.');
        } else {
            setModalTxt('올바른 이메일 또는 패스워드를 입력해주십시오.');
        }

    };


    const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log('user', user);
                user.getIdToken().then(token => {
                    saveToken(token);
                    dispatch(authAction.setToken({email, token}));
                    router.replace('/cleanlist')
                });
            })
            .catch(error => {
                const errorCode = error.code;
                setErrorMsg(errorCode);
                setIsModal(true);
            })
            .finally(() => {
                setEmail('');
                setPassword('');
                setIsLoading(false);
            })

    };


    const signUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            setModalTxt('패스워드와 패스워드 확인을 동일하게 입력해주세요');
            setIsModal(true);
            return;
        }

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setModalTxt('회원가입에 성공하였습니다.');
                setIsLoginForm(true);
            })
            .catch(error => {
                const errorCode = error.code;
                setErrorMsg(errorCode);
                setIsModal(true);

            })
            .finally(() => {
                setIsModal(true);
                setEmail('');
                setPassword('');
                setPasswordConfirm('');
                setIsLoading(false);
            })
    };


    const toggleForm = (isLoginForm: boolean) => {
        setIsLoginForm(isLoginForm);
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    };


    return (
        <>
            {isLoginForm &&
                <form onSubmit={loginSubmitHandler}
                      className='w-full flex flex-col justify-center items-center gap-4'>
                  <TextInput onChange={emailChangeHandler} placeHolder='' labelTxt='이메일' inputType='email'/>
                  <TextInput onChange={passwordChangeHandler } placeHolder='' labelTxt='패스워드' inputType='password'/>
                  <div className="actions pt-10">
                      {isLoading && <Button className='btn-wide'><Loading /></Button>}
                      {!isLoading && <Button className='btn-wide'><input type='submit' value='로그인' /></Button>}
                  </div>
                  <div onClick={() => setIsLoginForm(false)}
                       className='text-gray-500 text-sm cursor-pointer'>회원가입</div>
                </form >
            }

            {!isLoginForm &&
                <form onSubmit={signUpSubmitHandler}
                    className='w-full flex flex-col justify-center items-center gap-4'>
                  <TextInput onChange={emailChangeHandler} placeHolder='' labelTxt='이메일' inputType='email'/>
                  <TextInput onChange={passwordChangeHandler} placeHolder='' labelTxt='패스워드' inputType='password'/>
                  <TextInput onChange={passwordConfirmChangeHandler} placeHolder='' labelTxt='패스워드 확인' inputType='password'/>
                  <div className="actions pt-10">
                      {isLoading && <Button className='btn-wide'><Loading /></Button>}
                      {!isLoading && <Button className='btn-wide'><input type='submit' value='회원가입' /></Button>}
                  </div>
                  <div onClick={() => toggleForm(true)}
                       className='text-gray-500 text-sm cursor-pointer'>로그인</div>
                </form>
            }

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
