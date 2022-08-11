import {getUserProfile, getProfileStatus, putProfileStatus, logOut} from '../api/api'
import { SetAuth } from './auth-reducer'
import {toggleFetching} from './users-reducer'

//Action names //
const SET_USER_PROFILE = 'socialMedia/profile-reducer/SET-USER-PROFILE'
const SET_PROFILE_STATUS = 'socialMedia/profile-reducer/SET-PROFILE-STATUS'

let initialState = {
    userProfile: {
        userID: null,
        profileStatus: null,
        aboutMe: null,
        contacts: null,
        fullName: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        photos: {large: null},
    }
}

//Reducer //
const profileReducer = (state = initialState, action) => {
    const {type, userProfile, profileStatus} = action
    switch(type) {
        case SET_USER_PROFILE :
            return({
                ...state,
                userProfile: {...userProfile}
            })
        case SET_PROFILE_STATUS :
            return({
                ...state,
                profileStatus
            })
        default: return state
    }
}

//Action creators //
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus})

//Create a thunk ...//
export const loadProfileStatus = (uID) => async (dispatch) => {
    if(uID) {
        const response = await getProfileStatus(uID)
        
        dispatch(setProfileStatus(response.data))
    }
}

//Create a thunk ...//
export const updateProfileStatus = (status) => async (dispatch) => {
    await putProfileStatus(status)

    dispatch(setProfileStatus(status))
}

//Create a thunk ...//
export const loadUserProfile = (uID) => async (dispatch) => {
    if(uID) {
        dispatch(toggleFetching())

        const response = await getUserProfile(uID)
        console.log(response)
        dispatch(setUserProfile(response.data))
        dispatch(toggleFetching())
    }
}

//Create a thunk ...//
export const LogOutUser = () => async (dispatch) => {
    const response = await logOut()

    if(response.data.resultCode === 0) {
        dispatch(SetAuth(false, null))
        dispatch(setUserProfile(null))
    }
}

export default profileReducer