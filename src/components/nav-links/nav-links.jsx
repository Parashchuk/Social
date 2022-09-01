import React from 'react'
import {Link} from  'react-router-dom'
import './nav-links.css'

const NavLinks = () => {

    return (
        <nav className="nav-links">
            <div className="nav-links_container-links">
                <Link className="container-links_wraper" to="/profile">
                    <i className="bi bi-person-fill"></i>
                    <div className='container-links-link'>Profile</div>
                </Link>
                <Link className="container-links_wraper" to="/messages">
                    <i className="bi bi-chat-text-fill"></i>
                    <div className='container-links-link' >Messages</div>
                </Link>
                <Link className="container-links_wraper" to="/users">
                    <i className="bi bi-people-fill"></i>
                    <div className='container-links-link' >Users</div>
                </Link>
            </div>
        </nav>
    )
}

export default NavLinks