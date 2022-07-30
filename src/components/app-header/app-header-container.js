import {LogOutUser} from '../../redux/profile-reducer'
import AppHeader from './app-header'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    
})

const  AppHeaderContainer = connect(mapStateToProps, {LogOutUser})(AppHeader)

export default AppHeaderContainer