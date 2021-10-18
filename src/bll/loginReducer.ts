import {LoginResponseType} from "../components/c2-pages/Login/login-api";

type LoginStateType = LoginResponseType & {
    isLoggedIn: boolean
    password: string
}

const initialState: LoginStateType = {
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
    isLoggedIn: false,
    password: ''

}


export function loginReducer(state: LoginStateType = initialState, action: ActionType): LoginStateType {
    debugger
    switch (action.type) {
        case "login/SET-LOGIN-DATA": {
            return {
                ...state,
                email: action.email,
                rememberMe: action.rememberMe,
                password: action.password,
                isLoggedIn: true
            }
        }

        default:
            return state
    }
}

//actions
export const setLoginData = (email: string, password: string, rememberMe: boolean) => {
    return {
        type: 'login/SET-LOGIN-DATA',
        email,
        password,
        rememberMe
    }
}
export const setError = () => {

}
type ActionType = ReturnType<typeof setLoginData>