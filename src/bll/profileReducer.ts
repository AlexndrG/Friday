import {ProfileDataResponseType} from '../components/c2-pages/Login/login-api';
import {Dispatch} from 'redux'
import {profileAPI} from '../dal/api-profile';
import {setIsBusyAC} from "./registerReducer";
import {setLoginData} from "./loginReducer";

const initialState = {
    userData: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,// количество колод
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false,
        error: '',
    } as ProfileDataResponseType,

    isBusy: false,
    error: '',
}

type StateType = typeof initialState

export function profileReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'profile/SET-PROFILE-DATA': {
            return {
                ...state,
                userData: {...action.userProfile}
            }
        }

        case 'PROFILE/SET-USER-NAME':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.name
                }
            }

        case 'PROFILE/SET-USER-AVATAR':
            return {
                ...state,
                userData: {
                    ...state.userData,
                    avatar: action.imgUrl
                }
            }

        case 'PROFILE/SET-ERROR':
            return {
                ...state,
                error: action.errorText,
            }


        case 'PROFILE/SET-IS-BUSY':
            return {
                ...state,
                isBusy: action.isBusy
            }

        default:
            return state
    }
}

//actions
export const setProfileData = (userProfile: ProfileDataResponseType) => {
    return {
        type: 'profile/SET-PROFILE-DATA',
        userProfile
    } as const
}
export type ProfileActionType = ReturnType<typeof setProfileData>

export const setNameAC = (name: string) => ({type: 'PROFILE/SET-USER-NAME', name} as const)
export const setAvatarAC = (imgUrl: string | undefined)  => ({type: 'PROFILE/SET-USER-AVATAR', imgUrl} as const)
export const setErrorAC = (errorText: string) => ({type: 'PROFILE/SET-ERROR', errorText} as const)
export const setBusyAC = (isBusy: boolean) => ({type: 'PROFILE/SET-IS-BUSY', isBusy} as const)


export const updateNameAndImgTC = (imgUrl: string | undefined, name: string) => (dispatch: Dispatch) => {
    // dispatch(setIsBusyAC(true))
    profileAPI.updateProfileData(imgUrl, name)
        .then((res) => {
            dispatch(setNameAC(name))
            dispatch(setAvatarAC(imgUrl))
        })
        .catch(err => {
            dispatch(setErrorAC(err.response.data.error))
        })
        .finally(() => {
        dispatch(setIsBusyAC(false))
    })
}

export const getAuthUserTC = () => (dispatch: Dispatch) => {
    profileAPI.getAuthInfo()
        .then((response) => {
            dispatch(setProfileData({...response.data}))
        })
        .catch(() => {
            // dispatch(setLoginData(false))
        })
}

type ActionType =
    | ReturnType<typeof setNameAC>
    | ReturnType<typeof setAvatarAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setBusyAC>
    | ProfileActionType
