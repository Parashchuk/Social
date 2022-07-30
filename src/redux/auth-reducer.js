import {login} from '../api/api'
import { stopSubmit } from 'redux-form'

//Action names //
const SET_AUTH = 'socialMedia/auth-reducer/SET-AUTH'

const initialState = {
    isAuth: undefined,
    uID: undefined
}

//Reducer //
const authReducer = (state = initialState, action) => {
    const {type, isAuth, uID} = action
    switch(type) {
        case SET_AUTH:
            return ({
                ...state,
                isAuth,
                uID
            })
        default: return state
    }
}

//Action creators //
export const SetAuth = (isAuth, uID) => ({type : SET_AUTH, isAuth, uID})

//Create a thunk to Login or return an Error //
export const LoginUser = (email, password, rememberMe) => async (dispatch) => {
    const response = await login(email, password, rememberMe)

    if(response.data.resultCode === 0) {
        dispatch(SetAuth(!response.data.resultCode, response.data.data.userId))
    } 
    else {
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    }
}

export default authReducer