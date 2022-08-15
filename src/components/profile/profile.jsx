import React, { useState } from 'react';
import './profile.css'
import nullPhoto from './../../assets/img/null_photo.webp'
import { Navigate } from 'react-router';
import isPreloader from '../../assets/common/preloader/preloader';
import ProfileStatus from '../profile-status/profile-status';


const Profile = ({status, state, updateProfileStatus, isAuth, isFetching, userOwnerId, SetPhoto, isOwner}) => {
    //Redirect if not logined to Login //
    if(isAuth !== true) return <Navigate to='/login'/>

    //Local State
    //let {edtitMode, setEditMode} = useState(false)

    //First initialistaion
    if(!state.photos) return(
        <div className="profile">
            <div className="profile-container">
            </div>
        </div>
    )
    
    //Helpers
    let photoChanged = (event) => {
        if(event.target.files.length) SetPhoto(event.target.files[0])
    }


    //Initial user's data //
    const isChooseFile = isOwner 
    ? <input type={'file'} 
        accept={'image/*'} 
        onChange={(e) => photoChanged(e)} 
        className='profile-editButton button visual-button'/>
    : null;
    const photo = !state.photos.large ? nullPhoto : state.photos.large
    const jobDescription = !state.lookingForAJobDescription 
    ? 'Looks like the user is not looking for a job'
    : state.lookingForAJobDescription

        return(
            <div className="profile">

                {/* Show preloader while the data is receiving */}
                {isPreloader(isFetching)}

                <div className="profile-container">
                    <div className='profile-about-left'>
                        <div className='profile-about-left-container visual-container'>
                            <img className='profile-avatar' src={photo} alt='avatar'/>
                            {isChooseFile}
                        </div>
                    </div>
                    <div className="profile-about-right">
                        <div className='profile-about-right-container visual-container'>
                            <div className="profile_user-info">
                                <span className='profile-user-info_name'>{state.fullName}</span>
                                <ProfileStatus userId={state.userId} userOwnerId={userOwnerId}
                                status={status} updateProfileStatus={updateProfileStatus}/>
                            </div>
                            <div className='profile-about_additional-information'>
                                
                            </div>
                            <div className="profile_user-job">
                                <span className='profile-lookJob'>{state.lookingForAJob}</span>
                                <span className='profile-jobDescription'>{jobDescription}</span>
                            </div>
                            <div>
                                <button className='profile-about-more button visual-button'>Show More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Profile