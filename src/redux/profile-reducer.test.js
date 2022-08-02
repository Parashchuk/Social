import profileReducer, { setProfileStatus, setUserProfile } from "./profile-reducer";

let initialState = {
    userProfile: {}
}

describe('Profile Reducer' ,() => {
    it('Check the user profile data', () => {
        //The user data from get request //
        let userData = {
            userID: null,
            profileStatus: null,
            aboutMe: null,
            contacts: null,
            fullName: null,
            lookingForAJob: null,
            lookingForAJobDescription: null,
            photos: {large: null},
        }

        let action = setUserProfile(userData)

        let newState = profileReducer(initialState, action)

        expect(Object.keys(newState.userProfile).length).toBe(8)
    })
    it('Check the user profile status', () => {
        let profileStatus = 'hey'

        let action = setProfileStatus(profileStatus)

        let newState = profileReducer(initialState, action)

        expect(newState.profileStatus).toBe(profileStatus)
    })
})