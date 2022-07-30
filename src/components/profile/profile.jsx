import React from 'react';
import './profile.css'
import nullPhoto from './../../assets/img/null_photo.webp'
import { Navigate } from 'react-router';
import isPreloader from '../../assets/common/preloader/preloader';
import ProfileStatus from '../profile-status/profile-status';


const Profile = ({status, state, updateProfileStatus, isAuth, isFetching}) => {
    //Redirect if not logined to Login //
    if(isAuth !== true) return <Navigate to='/login'/>

    if(!state.photos) return(
        <div className="profile">
            <div className="profile-container">
            </div>
        </div>
    )
    //Initial user's data //
    const photo = !state.photos.large ? nullPhoto : state.photos.large
    const jobDescription = !state.lookingForAJobDescription 
    ? 'Looks like the user is not looking for a job (づ￣ 3￣)づ'
    : state.lookingForAJobDescription

        return(
            <div className="profile">

            </div>
        )
}

export default Profile