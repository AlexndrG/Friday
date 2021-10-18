import React, {ChangeEvent, useState} from 'react';
import s from './Login.module.css'
import {LoginForm} from "./LoginForm";
import {setLoginData} from "../../../bll/loginReducer";

type FormStateType = {
    email: string
    password: string
    rememberMe: boolean
}

export function Login() {
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
        setLoginData(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div className={s.loginContainer}>
            <div className={s.loginCard}>
                <h1>Sign in</h1>
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