import React from 'react';
import s from './Register.module.css'
import SuperInputText from '../../c1-common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../c1-common/c2-SuperButton/SuperButton';

export function Register() {

    return (
        <div className={s.main}>
            <h1>Register</h1>

            <div className={s.form}>
                <div className={s.item}>
                    text1
                    <br/>
                    <SuperInputText/>
                </div>

                <div className={s.item}>
                    text2
                    <br/>
                    <SuperInputText/>
                </div>

                <div className={s.item}>
                    text3
                    <br/>
                    <SuperInputText/>
                </div>

                <div className={s.item}>
                    <br/>
                    <SuperButton>
                        Send
                    </SuperButton>
                </div>
            </div>

        </div>
    )
}