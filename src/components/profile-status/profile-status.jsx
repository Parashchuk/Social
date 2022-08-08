import React from 'react'
import './profile-status.css'

class ProfileStatus extends React.PureComponent {
    state = {
        editMode: false,
        status: this.props.status
    }

    //Sync local state with redux //
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    //Toggle Status Edit mode //
    toggleProfileStatus = (event) => {
        if(this.props.userId === this.props.userOwnerId) {
            event.preventDefault()
            this.setState({
                editMode: !this.state.editMode
            })
        }
    }

    //Change value of controlled component //
    onStatusChange = (event) => {
        this.setState({
            status: event.target.value
        })
    }

    //Processing status submit //
    onStatusSubmit = (value) => {
        if(value !== this.props.status) this.props.updateProfileStatus(value)
    }

    render() {
        //Check status state //
        const isStatus = this.props.status ? this.props.status : 'The status empty'

        //Check editMode state //
        const isEditMode = this.state.editMode
        ? <form className='profileStatus-container'
            onSubmit={(event) => {
                this.onStatusSubmit(event.target[0].value)
                this.toggleProfileStatus(event)}}>
            <input
                onChange={(event) => this.onStatusChange(event)} 
                autoFocus={true} className='profileStatus-input' 
                value={this.state.status} 
                placeholder={'Type your status here'}/>
            <button className='profileStatus-button'>Save</button>
        </form>
        : <span onDoubleClick={this.toggleProfileStatus} className='profileStatus-span'> {isStatus} </span>
        
        //Return Status //
        return (<div className={this.state.editMode ? 'profileStatus-editMode' : 'profileStatus'}>{isEditMode}</div>)
    }
}

export default ProfileStatus