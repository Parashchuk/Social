import appReducer, { setInitialized } from "./app-reducer";

const state = {
    initialized: null
}

describe('App-Reducer', () => {
    it('Check if the initialisation was correct', () => {
        let action = setInitialized()

        let newState = appReducer(state, action)

        expect(newState.initialized).toBe(true)
    })
})
