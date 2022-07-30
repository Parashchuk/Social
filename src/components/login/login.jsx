import React from 'react'
import './login.css'
import { Field, reduxForm } from 'redux-form'
import { Element } from '../../assets/common/formsControls/formsControls'
import { required } from '../../units/validators/validators'

const Input = Element('input')

//Create an Login Form with library //
const LoginFrom = reduxForm({form: 'login'})((props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                className='login-container_input'
                component={Input}
                name='email'
                validate={[required]}
                type="text"
                placeholder='Login'/>
            <div>
                <Field 
                    className='login-container_input'
                    component={Input}
                    name='password'
                    validate={[required]}
                    type="password"
                    placeholder='Password'/>
            </div>
            {props.error && <div className='span_error api-error'>{props.error}</div>}
            <div>
                <Field
                    className='login-container_checkBox'
                    component={'input'}
                    name='rememberMe'
                    id='rememberMe'
                    type="checkbox" />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}))

const Login = (props) => {
    const onSubmit = (form) => {
        props.LoginUser(form.email, form.password, form.rememberMe)
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <LoginFrom onSubmit={onSubmit} props = {props}/>
        </div>
    )
}

export default Login