import { followDelete, loadUsers, followCreate } from "../api/api"

//Action names //
const ON_FOLLOWED_CHANGE = 'socialMedia/users-reducer/ON-FOLLOWED-CHANGE'
const SET_USERS = 'socialMedia/users-reducer/SET-USERS'
const SET_CURRENT_PAGE = 'socialMedia/users-reducer/SET-CURRENT-PAGE'
const TOGGLE_FETCHING = 'socialMedia/users-reducer/TOGGLE-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRES = 'socialMedia/users-reducer/TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    usersInfo : [],
    sizePage: 4,
    currentPage: 1,
    pagesCount: 80,
    isFetching: false,
    followingInProgress: []
}

//Reducer //
const usersReducer = (state = initialState, action) => {
    const {type, id, users, currentPage, isFetching} = action
    switch(type) {
        case ON_FOLLOWED_CHANGE :
            return ({
                ...state,
                usersInfo: state.usersInfo.map((el) => el.id === id ? {...el, followed: !el.followed} : el)
            })
        case SET_USERS :
            return ({
                ...state,
                usersInfo: users
            })
        case SET_CURRENT_PAGE : 
            return ({
                ...state,
                currentPage
            })
        case TOGGLE_FETCHING :
            return ({
                ...state,
                isFetching: !state.isFetching
            })
        case TOGGLE_IS_FOLLOWING_PROGRES :
            return ({
                ...state,
                followingInProgress: isFetching 
                ? [...state.followingInProgress, id]
                : [...state.followingInProgress.filter(el => el !== id)]
            })
        default: return state
    }
}

//Action creators //
export const onFollowedChange = (id) => ({type: ON_FOLLOWED_CHANGE, id}) 
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleFetching = () => ({type: TOGGLE_FETCHING})
export const isFollowingProgress = (id, isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRES, id, isFetching})

//Create thunk to get Users by curent page and set Preloader
export const getUsers = (currentPage, sizePage) => {
    return async (dispatch) => {
        dispatch(toggleFetching())
        dispatch(setCurrentPage(currentPage))

        const response = await loadUsers(currentPage, sizePage)

        dispatch(setUsers(response.items))
        dispatch(toggleFetching())
    }
}

//Create thunk to Follow/Unfollow
export const followToggle = (action, id) => {
    return async (dispatch) => {
        //Make button unactive to touch
        dispatch(isFollowingProgress(id, true))
        
        if(action === 'create') {
            //Create follow and make button active
            await followCreate(id)
            dispatch(onFollowedChange(id))
            dispatch(isFollowingProgress(id, false))
        } else {
            //Delete follow and make button active
            await followDelete(id)
            dispatch(onFollowedChange(id))
            dispatch(isFollowingProgress(id, false))
        }
    }
}

export default usersReducer 