import React, {ChangeEvent, KeyboardEvent, FocusEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {getAuthUserTC, updateNameAndImgTC} from '../../../bll/profileReducer';
import {Redirect} from 'react-router-dom';
import {Profile} from "./Profile";

export function ProfileContainer() {
    const imgUrl = useSelector<AppRootStateType, string | undefined>(state => state.profile.userData.avatar)
    const name = useSelector<AppRootStateType, string>(state => state.profile.userData.name)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const isBusy = useSelector<AppRootStateType, boolean>(state => state.profile.isBusy)
    const error = useSelector<AppRootStateType, string>(state => state.profile.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserTC())
    }, [])

    const [avatarUI, setAvatarUi] = useState(imgUrl)
    const [nameUi, setNameUi] = useState(name)

    const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAvatarUi(e.currentTarget.value)
    }
    const onKeyAvatarChangeHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            dispatch(updateNameAndImgTC(e.currentTarget.value, nameUi))
        }
    }
    const onBlurAvatarHandler = (e: FocusEvent<HTMLInputElement>) => {
        dispatch(updateNameAndImgTC(e.currentTarget.value, nameUi))
    }

    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNameUi(e.currentTarget.value)
    }
    const onKeyNameChangeHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            dispatch(updateNameAndImgTC(avatarUI, e.currentTarget.value))
        }
    }
    const onBlurNameHandler = (e: FocusEvent<HTMLInputElement>) => {
        dispatch(updateNameAndImgTC(avatarUI, e.currentTarget.value))
    }



    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return (
        <Profile
            isBusy={isBusy}
            imgUrl={imgUrl}
            name={name}
            isLoggedIn={isLoggedIn}
            error={error}
            avatarUI={avatarUI}
            nameUi={nameUi}
            changeAvatarHandler={changeAvatarHandler}
            onKeyAvatarChangeHandler={onKeyAvatarChangeHandler}
            onBlurAvatarHandler={onBlurAvatarHandler}
            changeNameHandler={changeNameHandler}
            onKeyNameChangeHandler={onKeyNameChangeHandler}
            onBlurNameHandler={onBlurNameHandler}
        />
    )
}
