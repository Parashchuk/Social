import messagesReducer, { onMessageSendSubmit } from './messages-reducer'

//Mix id for iterate elements in list //
let mixID = 0;
let initialState = {
    messages: [
        { type: 'output', content: 'hi', id: mixID++ },
        { type: 'output', content: 'how are you?', id: mixID++ },
    ],
}

describe('Messages Reducer', () => {
    it('Message was submit and add to state', () => {
        let action = onMessageSendSubmit('hey')

        let newState = messagesReducer(initialState, action)

        expect(newState.messages.length > initialState.messages.length).toBe(true)
    })
})