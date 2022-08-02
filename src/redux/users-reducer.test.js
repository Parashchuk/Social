import usersReducer, { isFollowingProgress, onFollowedChange, setCurrentPage, setUsers, toggleFetching } from "./users-reducer";

let initialState = {
    usersInfo : [
        {id: 32145, followed: false},
        {id: 12365, followed: true},
        {id: 73725, followed: false}
    ],
    sizePage: 4,
    currentPage: 1,
    pagesCount: 80,
    isFetching: false,
    followingInProgress: []
}

describe('Users Reducer', () => {
    it('Toggle Follow button', () => {
        let id = 32145

        let action = onFollowedChange(id)

        let newState = usersReducer(initialState, action)

        expect(newState.usersInfo[0].followed).toBe(true)
    })

    it('Check if the user was set', () => {
        let newUsers = [{id: 12414, followed: false}]

        let action = setUsers(newUsers)

        let newState = usersReducer(initialState, action)

        expect(newState.usersInfo[0].id).toBe(12414)
    })

    it('Check if the current page was setted', () => {
        let currentPage = 5

        let action = setCurrentPage(currentPage)

        let newState = usersReducer(initialState, action)

        expect(newState.currentPage).toBe(5)
    })

    it('Check if the fetching was toggle', () => {
        let action = toggleFetching()
        
        let newState = usersReducer(initialState, action)

        expect(newState.isFetching !== initialState.isFetching).toBe(true)
    })

    it('Check if the fetching "follow" button works', () => {
        let id = 123
        let action = isFollowingProgress(id, true)

        let newState = usersReducer(initialState, action)

        expect(newState.followingInProgress[0]).toBe(123)

        let theNextAction = isFollowingProgress(id, false)

        let theNextState = usersReducer(newState, theNextAction)
        
        expect(theNextState.followingInProgress[0]).toBe(undefined)
    })
})