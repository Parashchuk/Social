import {SetAuth} from './auth-reducer'
import {isAuth} from '../api/api'

//Action names //
const SET_INITIALIZED = 'socialMedia/app-reducer/SET_INITIALIZED'

const initialState = {
    initialased: null
}

//Reducer //
const appReducer = (state=initialState, action) => {
    const {type} = action
    switch(type) {
        case SET_INITIALIZED :
            return ({
                ...state,
                initialized: true
            })
        default: return (state)
    }
}

//Action creators //
export const setInitialized = () => ({type: SET_INITIALIZED})

//Create thunk ... //
export const isInitialized = () => async (dispatch) => {
    const response = await isAuth()
    
    dispatch(SetAuth(!response.resultCode, response.data.id))
    await dispatch(setInitialized())
}

export default appReducer