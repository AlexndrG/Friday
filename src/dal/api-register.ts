import {instance} from '../components/c2-pages/Login/login-api';

export const registerAPI = {
    register(email: string, password: string) {
        return instance.post<RegisterResponseType>('auth/register', {email, password});
        // return instance.post<RegisterParamsType, AxiosResponse<RegisterResponseType>>('auth/register',{email, password});
    },
}

// type RegisterParamsType = {
//     email: string
//     password: string
// }

type RegisterResponseType = {
    error?: string
}