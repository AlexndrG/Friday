import React from 'react';
import s from './SuperNavLink.module.css'
import { NavLink } from 'react-router-dom';

type PropsType = {
    goTo: string
    text: string
}

export function SuperNavLink(props: PropsType) {
    return (
            <NavLink className={s.item} to={props.goTo}>{props.text}</NavLink>
    )
}