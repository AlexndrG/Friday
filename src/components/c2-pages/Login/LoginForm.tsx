import React, {ChangeEvent} from 'react';
import SuperCheckbox from "../../c1-common/c3-SuperCheckbox/SuperCheckbox";

type LoginFormPropsType = {
    email: string
    password: string
    rememberMe: boolean
    onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void
    onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void
    onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit:()=>void
}

export const LoginForm = (props:LoginFormPropsType) => {
    return <>
        <input type={"text"} value={props.email} onChange={props.onEmailChange}/>
        <input type="password" value={props.password} onChange={props.onPasswordChange}/>
        <label>
            <SuperCheckbox checked={props.rememberMe} onChange={props.onCheckboxChange}/><span>remember me</span>
        </label>
        <button onClick={props.onSubmit}>Send</button>
    </>
};

