import React from 'react';
import './profile.css'
import nullPhoto from './../../assets/img/null_photo.webp'
import { Navigate } from 'react-router';
import isPreloader from '../../assets/common/preloader/preloader';
import ProfileStatus from '../profile-status/profile-status';


const Profile = ({status, state, updateProfileStatus, isAuth, isFetching}) => {
    //Redirect if not logined to Login //
    console.log(isPreloader)
    console.log(isPreloader(true))
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

                {/* Show preloader while the data is receiving */}
                {isPreloader(isFetching)}

                <div className="profile-container">
                    <img className='profile-avatar' src={photo} alt='avatar'/>
                    <div className="profile-about">
                        <div className="profile_user-info">
                            <span className='profile-user-info_name'>{state.fullName}</span>
                            <ProfileStatus status={status} updateProfileStatus={updateProfileStatus}/>
                        </div>
                        <div className="profile_user-job">
                            <span className='profile-lookJob'>{state.lookingForAJob}</span>
                            <span className='profile-jobDescription'>{jobDescription}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Profile