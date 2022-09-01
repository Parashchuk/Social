import {getUserProfile, getProfileStatus, putProfileStatus, logOut, putPhoto} from '../api/api'
import { SetAuth } from './auth-reducer'
import {toggleFetching} from './users-reducer'

//Action names //
const SET_USER_PROFILE = 'socialMedia/profile-reducer/SET-USER-PROFILE'
const SET_PROFILE_STATUS = 'socialMedia/profile-reducer/SET-PROFILE-STATUS'
const SET_PROIFLE_PHOTO = 'socialMedia/profile-reducer/SET-PROFILE-PHOTO'

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
    const {type, userProfile, profileStatus, profilePhoto} = action
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
        case SET_PROIFLE_PHOTO :
            return({
                ...state,
                userProfile: {...state.userProfile, photos: {...state.userProfile.photos, large: profilePhoto}}
            })
        default: return state
    }
}

//Action creators //
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus})
export const setProfilePhoto = (profilePhoto) => ({type: SET_PROIFLE_PHOTO, profilePhoto})

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

//Create a thunk ...//
export const SetPhoto = (photo) => async (dispatch) => {
    const response = await putPhoto(photo)

    dispatch(setProfilePhoto(response.data.data.photos.large))
}

export default profileReducer