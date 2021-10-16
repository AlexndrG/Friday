import React, {ChangeEvent} from 'react';
import s from './Register.module.css'
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';

type PropsType = {
    email: string
    password1: string
    password2: string
    error: string
    emailChange: (e: ChangeEvent<HTMLInputElement>) => void
    password1Change: (e: ChangeEvent<HTMLInputElement>) => void
    password2Change: (e: ChangeEvent<HTMLInputElement>) => void
    sendPress: () => void
}

export function Register(props: PropsType) {
    return (
        <div className={s.main}>
            <h1>Register</h1>

            <div className={s.form}>
                <div className={s.item}>
                    E-mail
                    <br/>
                    <SuperInputText
                        value={props.email}
                        onChange={props.emailChange}
                    />
                </div>

                <div className={s.item}>
                    Password
                    <br/>
                    <SuperInputText
                        value={props.password1}
                        onChange={props.password1Change}
                    />
                </div>

                <div className={s.item}>
                    Password (repeat)
                    <br/>
                    <SuperInputText
                        value={props.password2}
                        onChange={props.password2Change}
                    />
                </div>

                <div className={s.item}>
                    <br/>
                    <SuperButton
                        onClick={props.sendPress}
                    >
                        Send
                    </SuperButton>
                </div>
            </div>

            {props.error &&
            <div className={s.error}>
                {props.error}
            </div>}

        </div>
    )
}