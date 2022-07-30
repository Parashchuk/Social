import React from 'react'
import Messages from "./messages"
import {onMessageSendSubmit} from '../../redux/messages-reducer'
import {connect} from 'react-redux'
import withAuthRedirect from "../../hoc/withAuthRedirect"
import {compose} from 'redux'

class MessagesAPI extends React.Component {
        //Make scroll position target on last child on messages
        componentDidMount() {
            const lastMessageChild = document.querySelector('.last_message_shild')
            if(lastMessageChild) lastMessageChild.scrollIntoView()
        }

        //Make scroll position target on last child on messages
        componentDidUpdate() {
            const lastMessageChild = document.querySelector('.last_message_shild')
            if(lastMessageChild) lastMessageChild.scrollIntoView()
        }

        render() {
        return (<Messages {...this.props}/>)}
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    inputMessage: state.messagesPage.inputMessage,
    messages: state.messagesPage.messages,
})

const mapDispatchToProps = {
    onMessageSendSubmit
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesAPI)
