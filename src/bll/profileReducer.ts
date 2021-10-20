import {ProfileDataResponseType} from "../components/c2-pages/Login/login-api";

const initialState:ProfileDataResponseType = {
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

}

export function profileReducer(state: ProfileDataResponseType = initialState, action: ProfileActionType): ProfileDataResponseType {
    switch (action.type) {
        case "profile/SET-PROFILE-DATA":{
            return {
                ...action.userProfile
            }
        }

        default:
            return state
    }
}
//actions
export const setProfileData = (userProfile:ProfileDataResponseType) => {
    return {
        type: 'profile/SET-PROFILE-DATA',
        userProfile
    } as const
}
export type ProfileActionType = ReturnType<typeof setProfileData>
