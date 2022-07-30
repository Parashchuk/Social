//Action names //
const ON_MESSAGE_SEND_SUBMIT = 'socialMedia/messaegs-reducer/ON-MESSAGE-SEND-SUBMIT'

let mixID = 0;
let initialState = {
    messages: [
        { type: 'output', content: 'hi', id: mixID++ },
        { type: 'output', content: 'how are you?', id: mixID++ },
    ],
}

let _createMessage = (type, content) => {
    return ({
        type,
        content,
        id: mixID++
    })
}

//Reducer //
const messagesReducer = (state = initialState, action) => {
    let {type, message} = action
    switch (type) {
        case ON_MESSAGE_SEND_SUBMIT:
            return ({
                ...state,
                messages: [...state.messages, _createMessage('input', message)],
                })
        default: return state
    }
}

//Action creators //
export const onMessageSendSubmit = (message) => ({type: ON_MESSAGE_SEND_SUBMIT, message})

export default messagesReducer