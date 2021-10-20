import {loginAPI} from "../components/c2-pages/Login/login-api";
import {Dispatch} from "react";
import {ProfileActionType, setProfileData} from "./profileReducer";
import {AxiosError} from 'axios'

export type LoginStatusType = 'Loading' | 'Succeeded' | ''
type LoginStateType = {
    isLoggedIn: boolean
    error: string,
    loginStatus: LoginStatusType
}

const initialState: LoginStateType = {
    loginStatus: '',
    isLoggedIn: false,
    error: '',
}


export function loginReducer(state: LoginStateType = initialState, action: LoginActionTypes): LoginStateType {
    switch (action.type) {
        case "login/SET-LOGIN-DATA": {
            return {
                ...state,
                isLoggedIn: true
            }
        }
        case 'login/SET-LOGIN-STATUS':{
            return {
                ...state,
                loginStatus:action.status
            }
        }
        case "login/SET-ERROR":{
            return {
                ...state,
                error:action.error
            }
        }
        default:
            return state
    }
}

//actions
export const setLoginData = () => {
    return {
        type: 'login/SET-LOGIN-DATA',
    } as const
}
export const setLoginStatus = (status: LoginStatusType) => {
    return {
        type: 'login/SET-LOGIN-STATUS',
        status
    } as const
}
export const setError = (error: string) => {
    return {
        type: 'login/SET-ERROR',
        error
    } as const
}
type LoginActionTypes =
    ReturnType<typeof setLoginStatus>
    | ReturnType<typeof setLoginData>
    | ReturnType<typeof setError>
    | ProfileActionType
//thunk
export const setLoginRequest = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<LoginActionTypes>) => {
    dispatch(setLoginStatus('Loading'))
    loginAPI.logIn(email, password, rememberMe)
        .then(response => {
            dispatch(setLoginData())
            dispatch(setProfileData({...response.data}))
            dispatch(setLoginStatus('Succeeded'))
        })
        .catch((e: AxiosError) => {
            dispatch(setError(e.message))
            dispatch(setLoginStatus(''))
        })
}
