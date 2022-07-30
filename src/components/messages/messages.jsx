import React from 'react';
import './messages.css'
import { Field, reduxForm } from 'redux-form';

const MessagesForm = reduxForm({form : 'messages'})((props) => {
    return (
    <>
        <form onSubmit={props.handleSubmit} className="messages_container_form messages-form">
            <Field
                name='message'
                component='input'
                autoComplete="off"
                className='messages-form_input'
                placeholder='Type new massage here' />
            <button className='messages-form_button'>Send</button>
        </form>    
    </>)
})

const Messages = (props) => {
    //Create every single message element //
    let messagesElement = props.messages.map((el) => {
        //Add style to the last message element
        if(props.messages.length - 1 === el.id) {
            return (
                <div key={el.id} className={el.type + " messages_container-message last_message_shild"}>
                    <div>{el.content}</div>
                </div>)
        }
        return (
            <div key={el.id} className={el.type + " messages_container-message"}>
                <div>{el.content}</div>
            </div>)
    })

    //Create a submit request
    const onSubmit = (data) => {
        if(data.message) props.onMessageSendSubmit(data.message)
        data.message = ''
    }
    
    return (
        <div className="messages">
            <div className='messages_container'>
                <div className='messages_wraper'>
                    {messagesElement}
                </div>
                <MessagesForm onSubmit={onSubmit} props={props}/>
            </div>
        </div>
    )
}


export default Messages