import axios from 'axios';

// Test mode
const baseURL = 'http://localhost:7542/2.0/'
// Normal mode
// const baseURL = 'https://neko-back.herokuapp.com/2.0/'

const instance = axios.create({
    baseURL,
    withCredentials: true,
})


export const profileAPI = {
    // register(email: string, password: string) {
    //     return instance.post<RegisterResponseType>('auth/register', {email, password});
    //     // return instance.post<RegisterParamsType, AxiosResponse<RegisterResponseType>>('auth/register',{email, password});
    // },
    updateName(avatar: string, name: string) {
        return instance.put<RegisterResponseType>('auth/me', {avatar: avatar, name: name});
        // return instance.post<RegisterParamsType, AxiosResponse<RegisterResponseType>>('auth/register',{email, password});
    },
}

// type RegisterParamsType = {
//     email: string
//     password: string
// }

type RegisterResponseType = any