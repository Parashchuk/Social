import React from 'react';
import {connect} from 'react-redux'
import { Navigate } from "react-router";
import {LoginUser} from '../../redux/auth-reducer'
import Login from './login'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const authRedirect = (props) => {
    if(props.isAuth) return <Navigate to='/profile'/>
    return <Login LoginUser={props.LoginUser}/>
}

const LoginContainer = connect(mapStateToProps, {LoginUser})(authRedirect)

export default LoginContainer