import React from 'react';
import {Link} from 'react-router-dom'
import './app-header.css'

const AppHeader = (props) => {

    const onInputChange = (event) => {
        console.log('я те че поисковик нахой ?')
    }

    return (
        <div className="app-header">
            <div className="app-header_container">
                <div className="app-header_container-search">
                    <button className='app-header_burger-menu'></button>
                    <Link className='container-search_link' to="/">SocialMedia</Link>
                    <form>
                        <div className='app-header_container-input-searching'>
                            <div className='bi bi-search'></div>
                            <input onChange={ onInputChange } placeholder="Type to search" />
                        </div>
                        <button type="button">Search</button>
                    </form>
                </div>
                <div className="app-header_container-logOut">
                    <button className='visual-button' onClick={() => props.LogOutUser()}>Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader