import React, {ChangeEvent, useState} from 'react';
import SuperEditableSpan from "../../c1-common/c4-SuperEditableSpan/SuperEditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {updateNameAndImgTC} from "../../../bll/profileReducer";

export function Profile() {
    const imgUrl = useSelector<AppStoreType, string>(state => state.profile.imgURL)
    const name = useSelector<AppStoreType, string>(state => state.profile.name)
    // const error = useSelector<AppStoreType, string>(state => state.profile.error)
    const dispatch = useDispatch()

    const [imgURLUi, setImgURLUi] = useState(imgUrl)
    const [nameUi, setNameUi] = useState(name)



    return (
        <div>
            <img alt={'Profile image'} src={imgUrl}/>
            <div>
                <span>
                Avatar URL:
                 <SuperEditableSpan
                     value={imgURLUi}
                     onChange={(e:ChangeEvent<HTMLInputElement>)=>{setImgURLUi(e.currentTarget.value)}}
                     onBlur={() => dispatch(updateNameAndImgTC(imgURLUi, name))}
                 />
                </span>
            </div>
            <div>
                <span>
                Name:
                <SuperEditableSpan
                    value={nameUi}
                    onChange={e => setNameUi(e.currentTarget.value)}
                    onBlur={() => dispatch(updateNameAndImgTC(imgURLUi, name))}
                />

                </span>
            </div>
            {/*{error !== '' && <div>{error}</div>}*/}
        </div>
    )
}
