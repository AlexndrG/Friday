import axios from 'axios'

// Test mode
// const baseURL = 'http://localhost:7542/2.0/'
// Normal mode
const baseURL = 'https://neko-back.herokuapp.com/2.0/'

export const instance = axios.create({
    baseURL,
    withCredentials: true,
})
export type ProfileDataResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;

}
export const loginAPI = {
    logIn(email:string, password:string,rememberMe:boolean) {
        return instance.post<ProfileDataResponseType>('auth/login',{email,password,rememberMe})
    },
    logOut(){
        return instance.delete('auth/me')
    }
}
