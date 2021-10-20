import React, {ChangeEvent, useState} from 'react';
import s from './Login.module.css'
import {LoginForm} from "./LoginForm";
import {LoginStatusType, setLoginRequest} from "../../../bll/loginReducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes/Routes";
import {AppRootStateType} from '../../../bll/store';

type FormStateType = {
    email: string
    password: string
    rememberMe: boolean
}

export function Login() {
    const isLoggedIn = useSelector<AppRootStateType,boolean>(state=>state.login.isLoggedIn)
    const error = useSelector<AppRootStateType,string>(state=>state.login.error)
    const status = useSelector<AppRootStateType,LoginStatusType>(state=>state.login.loginStatus)
    const dispatch = useDispatch()
    let [formData, setFormData] = useState<FormStateType>({
        email: '',
        password: '',
        rememberMe: false
    })

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,email:e.currentTarget.value})
    }
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,password:e.currentTarget.value})
    }
    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,rememberMe:e.currentTarget.checked})
    }
    const onSubmitHandler = () => {
        dispatch(setLoginRequest(formData.email, formData.password, formData.rememberMe))
        setFormData({...formData,email:'',rememberMe:false,password:''})
    }
     if(isLoggedIn)return <Redirect to={PATH.PROFILE}/>

    return (
        <div className={s.loginContainer}>
            <div className={s.loginCard}>
                <h1>Sign in</h1>
                {error&&error}
                {status&&status}
                <LoginForm
                    email={formData.email}
                    password={formData.password}
                    rememberMe={formData.rememberMe}
                    onEmailChange={onEmailChange}
                    onPasswordChange={onPasswordChange}
                    onCheckboxChange={onCheckboxChange}
                    onSubmit={onSubmitHandler}
                />
            </div>

        </div>
    )
}