import React, {ChangeEvent, useState} from 'react';
import {Register} from './Register';

export function RegisterContainer() {
    const [email, setEmail] = useState<string>('')
    const [password1, setPassword1] = useState<string>('')
    const [password2, setPassword2] = useState<string>('')
    const [error, setError] = useState<string>('')

    const emailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) setError('')
        setEmail(e.currentTarget.value)
    }

    const password1Change = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) setError('')
        setPassword1(e.currentTarget.value)
    }

    const password2Change = (e: ChangeEvent<HTMLInputElement>) => {
        if (error) setError('')
        setPassword2(e.currentTarget.value)
    }

    const sendPress = () => {
        if (password1 !== password2) {
            setError('Passwords do not match!')
            return
        }
    }

    return (
        <Register
            email={email}
            password1={password1}
            password2={password2}
            emailChange={emailChange}
            password1Change={password1Change}
            password2Change={password2Change}
            sendPress={sendPress}
            error={error}
        />
    )
}