import {combineReducers, createStore} from 'redux'
import {authReducer} from './authReducer';
import {userReducer} from './userReducer';

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
