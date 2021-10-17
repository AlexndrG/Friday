import {applyMiddleware, combineReducers, createStore} from 'redux'
import {loginReducer} from './loginReducer'
import {profileReducer} from './profileReducer'
import {registerReducer} from './registerReducer'
import {passwordNewReducer} from './passwordNewReducer';
import {passwordRestoreReducer} from './passwordRestoreReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    passwordNew: passwordNewReducer,
    passwordRestore: passwordRestoreReducer,
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store

export type AppRootStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
