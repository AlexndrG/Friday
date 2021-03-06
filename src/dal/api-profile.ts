import {instance} from '../components/c2-pages/Login/login-api';

export const profileAPI = {
    updateProfileData(avatar: string | undefined, name: string) {
        // return instance.put<RegisterResponseType>('auth/me', {avatar: avatar, name: name});
        return instance.put<RegisterParamsType, AxiosResponse>('auth/me', {avatar, name});
    },
    getAuthInfo() {
        // return instance.post<RegisterResponseType>('auth/me');
        // return instance.post<RegisterParamsType, AxiosResponse>('auth/me', {});
        return instance.post<LoginResponseType>('auth/me', {});
    },
}

export type LoginResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number // количество колод
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean            // подтвердил ли почту
    rememberMe: boolean
    error?: string
}


type RegisterParamsType = {
    avatar?: string
    name?: string
}

type AxiosResponse = {
    data: RegisterResponseType
}

type DeviceTokensType = {
    _id: string
    device: string
}

type RegisterResponseType = {
    avatar: string
    created: string
    deviceTokens: Array<DeviceTokensType>
    email: string
    isAdmin: boolean
    name: string
    publicCardPackCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    error?: string
}