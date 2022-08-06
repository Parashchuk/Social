import React from 'react'
import {connect} from 'react-redux'
import {followToggle, getUsers, setStartOfPage} from '../../redux/users-reducer'
import Users from './users'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class UsersAPI extends React.Component {

    //Set Paginator on Users Page //
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.sizePage)
    }

    //Set current Paginator value //
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.sizePage)
    }
    
    render() {
        return (<Users onPageChanged = {this.onPageChanged} {...this.props}/>)
    }
}

const mapStateToProps = (state) => ({
    ...state.usersPage,
    isAuth : state.auth.isAuth
})

const mapDispatchToProps = {
    getUsers,
    followToggle,
    setStartOfPage,
}

export default compose(
    connect( mapStateToProps, mapDispatchToProps ),
    withAuthRedirect
)(UsersAPI);