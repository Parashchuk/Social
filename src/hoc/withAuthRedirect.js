import React from "react";
import { Navigate } from "react-router";

//Create a HOC to redirect on Login
const withAuthRedirect = (Component) => {
    const authRedirect = (props) => {
        if(props.isAuth !== true) return <Navigate to='/login'/>
        return <Component {...props} />
    }
    return authRedirect
}

export default withAuthRedirect