import React from 'react';
import {PATH} from '../c2-pages/Routes/Routes';
import {SuperNavLink} from '../c1-common/c91-SuperNavLink/SuperNavLink';


export function Header() {
    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'red'}}>FRIDAY</h1>

            <SuperNavLink goTo={PATH.LOGIN} text={'Login page'}/>
            <SuperNavLink goTo={PATH.REGISTER} text={'Register page'}/>
            <SuperNavLink goTo={PATH.PROFILE} text={'Profile page'}/>
            <SuperNavLink goTo={PATH.PASSWORD_RESTORE} text={'Restore password page'}/>
            <SuperNavLink goTo={PATH.PASSWORD_NEW} text={'New password page'}/>
            <SuperNavLink goTo={PATH.TEST} text={'Test page'}/>
            <SuperNavLink goTo={'Error404'} text={'Error page'}/>
        </div>
    )
}