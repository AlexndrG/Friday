import {Dispatch} from 'redux'
import {profileAPI} from "../dal/api-profile";


const initialState = {
    name: 'some name',
    imgURL: 'some url',
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
                imgURL: action.imgUrl,
            }

        case 'PROFILE/SET-ERROR':
            return {
                ...state,
                error: action.errorText,
            }

        default:
            return state
    }
}

export const setNameAC = (name: string) => ({type: 'PROFILE/SET-USER-NAME', name} as const)
export const setImgUrlAC = (imgUrl: string) => ({type: 'PROFILE/SET-USER-IMAGE', imgUrl} as const)
export const setErrorAC = (errorText: string) => ({type: 'PROFILE/SET-ERROR', errorText} as const)


export const updateNameAndImgTC = (imgUrl: string, name: string) => (dispatch: Dispatch) => {
    profileAPI.updateName(imgUrl, name)
        .then(() => {
            dispatch(setNameAC(name))
            dispatch(setImgUrlAC(imgUrl))
        })
        .catch(err => {
            dispatch(setErrorAC(err.response.data.error))
        })

}

type ActionType =
    | ReturnType<typeof setNameAC>
    | ReturnType<typeof setImgUrlAC>
    | ReturnType<typeof setErrorAC>
