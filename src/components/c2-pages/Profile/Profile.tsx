import React, {ChangeEvent, useEffect, useState} from 'react';
import SuperEditableSpan from "../../c1-common/c4-SuperEditableSpan/SuperEditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {getAuthUserTC, updateNameAndImgTC} from "../../../bll/profileReducer";
import { Redirect } from 'react-router-dom';
import s from './Profile.module.css'

export function Profile() {
    const imgUrl = useSelector<AppStoreType, string>(state => state.profile.imgUrl)
    const name = useSelector<AppStoreType, string>(state => state.profile.name)
    const isAuth = useSelector<AppStoreType, boolean>(state => state.profile.isAuth)
    // const error = useSelector<AppStoreType, string>(state => state.profile.error)
    const dispatch = useDispatch()

    const [imgURLUi, setImgURLUi] = useState(imgUrl)
    const [nameUi, setNameUi] = useState(name)

    useEffect(() => {dispatch(getAuthUserTC())}, [])

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.profileContainer}>
                <div className={s.profileData}>
            <img alt={'Profile image'} src={imgURLUi}/>
                </div>
            <div className={s.profileData}>
                Avatar URL:
                 <SuperEditableSpan
                     value={imgURLUi}
                     onChange={(e:ChangeEvent<HTMLInputElement>)=>{setImgURLUi(e.currentTarget.value)}}
                     onBlur={(e) => dispatch(updateNameAndImgTC(e.currentTarget.value, nameUi))}
                 />
                {/*<button onClick={()=> dispatch(getAuthUserTC())}>Check request</button>*/}
            </div>
            <div className={s.profileData}>
                Name:
                <SuperEditableSpan
                    value={nameUi}
                    onChange={e => setNameUi(e.currentTarget.value)}
                    onBlur={(e) => dispatch(updateNameAndImgTC(imgURLUi, e.currentTarget.value))}
                />
            </div>
            {/*{error !== '' && <div>{error}</div>}*/}
        </div>
    )
}
