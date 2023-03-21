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


const Home: NextPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [isModal, setIsModal] = useState<boolean>(false);
    const [modalTxt, setModalTxt] = useState<string>('');
    const [emailValidateMsg, setEmailValidateMsg] = useState<string>('');
    const [passwordValidateMsg, setPasswordValidateMsg] = useState<string>('')


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

    const validate = () => {
        if (!validateEmail(email)) {
            setEmailValidateMsg('올바른 형식의 이메일을 입력해주세요');
            return false;
        } else if (!validatePassword(password))  {
            setPasswordValidateMsg('패스워드는 영문자, 숫자가 포함된 8 이상의 글자입니다');
            return false;
        }
    }

    const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) return;

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

        setEmail('');
        setPassword('');
    };


    const signUpSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validate()) return;

        if (password !== passwordConfirm) {
            setModalTxt('패스워드와 패스워드 확인을 동일하게 입력해주세요');
            setIsModal(true);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setModalTxt('회원가입에 성공하였습니다.');
                setIsLoginForm(true);
            })
            .catch(console.log);

        setIsModal(true);
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    };


    const toggleForm = (isLoginForm: boolean) => {
        setIsLoginForm(isLoginForm);
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
        setEmailValidateMsg('');
        setPasswordValidateMsg('');
    };


    return (
        <>
            {isLoginForm &&
                <form onSubmit={loginSubmitHandler}
                      className='w-full flex flex-col justify-center items-center gap-6'>
                  <TextInput validateMsg={emailValidateMsg} onChange={emailChangeHandler} placeHolder='이메일을 입력해주세요.' labelTxt='이메일' inputType='email'/>
                  <TextInput validateMsg={passwordValidateMsg} onChange={passwordChangeHandler } placeHolder='영문자, 숫자가 포함된 6~17 글자 입력' labelTxt='패스워드' inputType='password'/>
                  <div className="actions">
                    <input type='submit' value='로그인' className='btn btn-wide mt-10' />
                  </div>
                  <div onClick={() => setIsLoginForm(false)}
                       className='text-gray-500 text-sm cursor-pointer'>회원가입</div>
                </form >
            }

            {!isLoginForm &&
                <form onSubmit={signUpSubmitHandler}
                    className='w-full flex flex-col justify-center items-center gap-6'>
                  <TextInput validateMsg={emailValidateMsg} onChange={emailChangeHandler} placeHolder='이메일을 입력해주세요.' labelTxt='이메일' inputType='email'/>
                  <TextInput validateMsg={passwordValidateMsg} onChange={passwordChangeHandler} placeHolder='영문자, 숫자가 포함된 6~17 글자의 숫자를 입력해주세요' labelTxt='패스워드' inputType='password'/>
                  <TextInput onChange={passwordConfirmChangeHandler} placeHolder='패스워드를 입력해주세요.' labelTxt='패스워드 확인' inputType='password'/>
                  <div className="actions">
                    <input type='submit' value='회원가입' className='btn btn-wide mt-10' />
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
