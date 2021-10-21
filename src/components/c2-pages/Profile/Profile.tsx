import React, {ChangeEvent, FocusEvent, KeyboardEvent, useEffect, useState} from 'react';
import SuperEditableSpan from '../../c1-common/c4-SuperEditableSpan/SuperEditableSpan';
import s from './Profile.module.css'
import {Loader} from "../../Loader/Loader";

type ProfilePropsType = {
    isBusy: boolean
    imgUrl: string | undefined
    name: string
    isLoggedIn: boolean
    error: string
    avatarUI: string | undefined
    nameUi: string
    changeAvatarHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyAvatarChangeHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    onBlurAvatarHandler: (e: FocusEvent<HTMLInputElement>) => void
    changeNameHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyNameChangeHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    onBlurNameHandler: (e: FocusEvent<HTMLInputElement>) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={s.profileContainer}>
            <div className={s.profileData}>
                <img alt={'Profile image'} src={props.avatarUI}/>
            </div>
            <div className={s.profileData}>
                Avatar URL:
                <SuperEditableSpan
                    value={props.avatarUI}
                    onChange={props.changeAvatarHandler}
                    onKeyPress={props.onKeyAvatarChangeHandler}
                    onBlur={props.onBlurAvatarHandler}
                />
            </div>
            <div className={s.profileData}>
                Name:
                <SuperEditableSpan
                    value={props.nameUi}
                    onChange={props.changeNameHandler}
                    onKeyPress={props.onKeyNameChangeHandler}
                    onBlur={props.onBlurNameHandler}
                />
            </div>

            {props.isBusy &&
            <div>
                <Loader/>
            </div>}
            {props.error !== '' && <div>{props.error}</div>}
        </div>
    )
}
