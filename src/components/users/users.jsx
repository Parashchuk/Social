import React from 'react'
import './users.css'
import nullPhoto from './../../assets/img/null_photo.webp'
import { Link } from 'react-router-dom'
import isPreloader from '../../assets/common/preloader/preloader'



const Users = ({usersInfo, pagesCount, onPageChanged, currentPage,
    isFetching, followingInProgress, followToggle, sizePagination = 20,
    setStartOfPage, startOfPage}) => {

    let endOfPage = startOfPage + sizePagination;
    let endOfAllPages = pagesCount / sizePagination;

    //Create Pagination //
    let pagination = []
    for(let i = startOfPage; i < endOfPage; i++) {
        pagination.push(<span 
            className={i === currentPage ? 'current_page' : ''} 
            key={i} 
            onClick={() => onPageChanged(i)}>{i}</span>)
    }

    //What image will show //
    let usersIMG = (el) => {
        if (el.photos.large) return el.photos.large
        else if (el.photos.small) return el.photos.small
        else return nullPhoto
    }

    //What (Follow/Unfollow) button will appear //
    let followToggleChanger = (uID, isFollow) => {
        return isFollow 
                    ? <button 
                        disabled={followingInProgress.some((id) => id === uID)}
                        onClick={() => followToggle('delete', uID)}
                        type='button'>Unfollow</button> 
                    : <button 
                        disabled={followingInProgress.some((id) => id === uID)} 
                        onClick={() => followToggle('create', uID)}
                        type='button'>Follow
                    </button>
    }

    //Create every user's element //
    let users = usersInfo.map((el) => (
        <div key={el.id} className="users-wrapper wrapper-user">
            <div className="wrapper-user_avatar">
                <Link to={'../profile/' + el.id}>
                    <img src={usersIMG(el)} alt="avatar" />
                </Link>
                {followToggleChanger(el.id, el.followed)}
            </div>
            <div className="wrapper-user_info user-info">
                <div className="user-info_bio">
                    <span>{el.name}</span>
                    <span>{el.status == null ? `The user hasn't written anything here yet`: el.status}</span>
                </div>
                <div className="user-info_location">
                    <span>It-country</span>
                    <span>Programer-sity</span>
                </div>
            </div>
        </div>
    ))

    return (
        <div className='users'>
            {isPreloader(isFetching)}
            <div className="users-switcher">
                <button><i className="bi bi-chevron-double-left button-left" onClick={() => {
                    if(startOfPage > sizePagination) {
                        setStartOfPage(startOfPage - sizePagination)
                        onPageChanged(startOfPage - sizePagination)
                    }}}/>
                </button>
                {pagination}
                <button><i className="bi bi-chevron-double-right button-right" onClick={() => {
                    if(startOfPage <= endOfAllPages) {
                        setStartOfPage(startOfPage + sizePagination)
                        onPageChanged(startOfPage + sizePagination)
                    }}}/>
                </button>
            </div>
            <div className='users-container'>
                {users}
            </div>
        </div>
    )
}

export default Users