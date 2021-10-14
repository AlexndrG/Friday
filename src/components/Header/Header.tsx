import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../../pages/Routes/Routes.module.css';
import {PATH} from '../../pages/Routes/Routes';


export function Header() {
    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'red'}}>FRIDAY</h1>

            <NavLink className={s.item} to={PATH.LOGIN}> Login page </NavLink>
            <NavLink className={s.item} to={PATH.REGISTER}> Register page </NavLink>
            <NavLink className={s.item} to={PATH.PROFILE}> Profile page </NavLink>
            <NavLink className={s.item} to={PATH.PASSWORD_RESTORE}> Restore password page </NavLink>
            <NavLink className={s.item} to={PATH.PASSWORD_NEW}> New password page </NavLink>
            <NavLink className={s.item} to={PATH.TEST}> Test page </NavLink>
            <NavLink className={s.item} to={'Error404'}> Error page </NavLink>
        </div>
    )
}