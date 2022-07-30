import React from 'react'
import {Link} from  'react-router-dom'
import './nav-links.css'

const NavLinks = () => {

    return (
        <nav className="nav-links">
            <div className="nav-links_container-links">
                <div className="container-links_wraper">
                    <i className="bi bi-person-fill"></i>
                    <Link className='container-links-link' to="/profile">Profile</Link>
                </div>
                <div className="container-links_wraper">
                    <i className="bi bi-chat-text-fill"></i>
                    <Link className='container-links-link' to="/messages">Messages</Link>
                </div>
                <div className="container-links_wraper">
                    <i className="bi bi-people-fill"></i>
                    <Link className='container-links-link' to="/users">Users</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavLinks