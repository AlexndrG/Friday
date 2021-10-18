import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/'
})
export type LoginResponseType = {
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
        return instance.post<LoginResponseType>('auth/login',{email,password,rememberMe})
    }
}