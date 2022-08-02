import authReducer, { SetAuth } from './auth-reducer'

const initialState = {
    isAuth: undefined,
    uID: undefined
}

describe('Auth Reducer', () => {
    it('is was authefication', () => {
        let action = SetAuth(true, 123)

        let newState = authReducer(initialState, action)

        expect(newState.isAuth).toBe(true)
        expect(newState.uID).toBe(123)
    })

})