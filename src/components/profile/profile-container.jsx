import React from 'react'
import Profile from './profile'
import {connect} from 'react-redux'
import {loadUserProfile, loadProfileStatus, updateProfileStatus, SetPhoto} from '../../redux/profile-reducer'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

//Create a HOC for back responsibility //
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

//Create a class to get Lifecycle methods //
class ProfileAPI extends React.PureComponent {
    isWasAxiosRequest = false

    //Check if this is an owner profile request //
    componentDidMount() {
        const {router, uID} =  this.props
        if (!isNaN(+router.params.profileId) || router.params.profileId === undefined) {
        let currentID = router.params.profileId ? router.params.profileId : uID
        this.props.loadUserProfile(currentID)
        this.props.loadProfileStatus(currentID)
        }
    }

    //Check if this is an owner profile request //
    componentDidUpdate () {
        const {state, uID, myProfile} = this.props
        if (state.userProfile.userId !== uID 
        && state.userProfile.userId !== undefined
        && !this.isWasAxiosRequest && myProfile) 
        {
            this.isWasAxiosRequest = true
            this.props.loadUserProfile(this.props.uID)
            this.props.loadProfileStatus(this.props.uID)
        }
    }
    
    render() {
        return <Profile 
            isOwner={!this.props.router.params.profileId}
            userOwnerId={this.props.uID}
            status={this.props.state.profileStatus}
            isAuth = {this.props.isAuth} 
            state={this.props.state.userProfile}
            isFetching={this.props.isFetching}
            updateProfileStatus={this.props.updateProfileStatus}
            SetPhoto={this.props.SetPhoto}
            />
            
    }
}

const mapStateToProps = (state) => ({
    state: state.profilePage,
    isAuth : state.auth.isAuth,
    uID: state.auth.uID,
    isFetching : state.usersPage.isFetching
})

const mapDispatchToProps = {
    loadUserProfile,
    loadProfileStatus,
    updateProfileStatus,
    SetPhoto
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileAPI)