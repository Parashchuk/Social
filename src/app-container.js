import React from 'react'
import App from './App'
import {connect} from 'react-redux'
import { isInitialized } from './redux/app-reducer'

class AppApi extends React.Component {

    //Initialise the App
    componentDidMount() {
        this.props.isInitialized()
    }

    render() {
        return (
            <App {...this.props.state}/>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})

const AppContainer = connect(mapStateToProps, {isInitialized})(AppApi)

export default AppContainer
