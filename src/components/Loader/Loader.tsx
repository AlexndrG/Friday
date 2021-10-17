import React from 'react';
import s from './Loader.module.css'
import loadingPicture from './loader.gif'

export function Loader() {
    return <img className={s.loader} src={loadingPicture}/>
}