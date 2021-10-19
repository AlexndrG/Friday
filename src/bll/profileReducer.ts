import {Dispatch} from 'redux'
import {profileAPI} from "../dal/api-profile";


const initialState = {
    isAuth: false,
    name: '',
    imgUrl: '',
    error: ''
}
type StateType = typeof initialState

export function profileReducer(state: StateType = initialState, action: ActionType): StateType {
    switch (action.type) {
        case 'PROFILE/SET-USER-NAME':
            return {
                ...state,
                name: action.name,
            }

        case 'PROFILE/SET-USER-IMAGE':
            return {
                ...state,
                imgUrl: action.imgUrl,
            }

        case 'PROFILE/SET-ERROR':
            return {
                ...state,
                error: action.errorText,
            }

        case 'PROFILE/SET-AUTH':
            return {
                ...state,
                isAuth: action.isAuth,
            }

        default:
            return state
    }
}

export const setNameAC = (name: string) => ({type: 'PROFILE/SET-USER-NAME', name} as const)
export const setImgUrlAC = (imgUrl: string) => ({type: 'PROFILE/SET-USER-IMAGE', imgUrl} as const)
export const setErrorAC = (errorText: string) => ({type: 'PROFILE/SET-ERROR', errorText} as const)
export const setAuthAC = (isAuth: boolean) => ({type: 'PROFILE/SET-AUTH', isAuth} as const)


export const updateNameAndImgTC = (imgUrl: string, name: string) => (dispatch: Dispatch) => {
    profileAPI.updateProfileData(imgUrl, name)
        .then((res) => {
            dispatch(setNameAC(name))
            dispatch(setImgUrlAC(imgUrl))
        })
        .catch(err => {
            dispatch(setErrorAC(err.response.data.error))
        })
}

export const getAuthUserTC = () => (dispatch: Dispatch) => {
    profileAPI.getAuthInfo()
        .then((res) => {
            console.log(res.data.name)
            dispatch(setNameAC(res.data.name))
            dispatch(setImgUrlAC(res.data.avatar))
            dispatch(setAuthAC(true))
        })
        .catch((err) => {
            // dispatch(setAuthAC(false))
        })
}

type ActionType =
    | ReturnType<typeof setNameAC>
    | ReturnType<typeof setImgUrlAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setAuthAC>
