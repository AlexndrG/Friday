import React, {ChangeEvent, useEffect, useState} from 'react';
import {Register} from './Register';
import {useDispatch, useSelector} from 'react-redux';
import {registerTC, setErrorAC, setIsRegisteredAC} from '../../../bll/registerReducer';
import {AppRootStateType} from '../../../bll/store';
import {Redirect} from 'react-router-dom';

export function RegisterContainer() {
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.register.isRegistered)
    const error = useSelector<AppRootStateType, string>(state => state.register.error)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setIsRegisteredAC(false))
        }
    }, [])

    // const [email, setEmail] = useState<string>('')
    // const [password1, setPassword1] = useState<string>('')
    // const [password2, setPassword2] = useState<string>('')
    const [email, setEmail] = useState<string>('dfkcnsldkfj@sdfsifd.ru')
    const [password, setPassword] = useState<string>('11111111')
    const [password2, setPassword2] = useState<string>('11111111')

    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setErrorAC(''))
        setEmail(e.currentTarget.value)
    }

    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setErrorAC(''))
        setPassword(e.currentTarget.value)
    }

    const password2Change = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) dispatch(setErrorAC(''))
        setPassword2(e.currentTarget.value)
    }

    const registerPress = () => {
        if (email === '' && password === '' && password2 === '') {
            dispatch(setErrorAC('Fill all fields!'))
            return
        }

        if (password !== password2) {
            dispatch(setErrorAC('Passwords do not match!'))
            return
        }

        dispatch(registerTC(email, password))
    }


    if (isRegistered) {
        return <Redirect to={'/login'}/>
    }

    return (
        <Register
            email={email}
            password={password}
            password2={password2}
            emailChange={emailChange}
            passwordChange={passwordChange}
            password2Change={password2Change}
            registerPress={registerPress}
            error={error}
        />
    )
}