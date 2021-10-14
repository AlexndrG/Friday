import {combineReducers, createStore} from 'redux'
import {loginReducer} from './loginReducer'
import {profileReducer} from './profileReducer'
import {registerReducer} from './registerReducer'
import {passwordNewReducer} from './passwordNewReducer';
import {passwordRestoreReducer} from './passwordRestoreReducer';


const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    passwordNew: passwordNewReducer,
    passwordRestore: passwordRestoreReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev