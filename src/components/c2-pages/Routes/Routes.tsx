import React from 'react';
import s from './Routes.module.css'
import {Route, Switch} from 'react-router-dom';
import {Error404} from '../Error404/Error404';
import {PwdRestore} from '../PwdRestore/PwdRestore';
import {PwdNew} from '../PwdNew/PwdNew';
import {Login} from '../Login/Login';
import {Test} from '../Test/Test';
import {RegisterContainer} from '../Register/RegisterContainer';
import {ProfileContainer} from "../Profile/ProfileCintainer";

/*
логинизация
регистрация
профайл
404 (можно застилизовать заранее)
восстановление пароля
ввод нового пароля
тестовая - отобразить/продемонстрировать все SuperКомпоненты
 */

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    PASSWORD_RESTORE: '/pwd-restore',
    PASSWORD_NEW: '/pwd-new',
    TEST: '/test',
}


export function Routes() {
    return (
        <div className={s.routeContainer}>
            <Switch>
                <Route path={'/'} exact render={() => <Test/>}/>

                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
                <Route path={PATH.PASSWORD_RESTORE} render={() => <PwdRestore/>}/>
                <Route path={PATH.PASSWORD_NEW} render={() => <PwdNew/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}
