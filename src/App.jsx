import './App.css';
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AppHeaderContainer from './components/app-header/app-header-container'
import ProfileContainer from './components/profile/profile-container'
import MessagesContainer from './components/messages/messages-container'
import NavLinks from './components/nav-links/nav-links'
import UsersContainer from './components/users/users-container'
import LoginContainer from './components/login/login-container'
import isPreloader from './assets/common/preloader/preloader';


const App = (state) => {
    if(!state.appPage.initialized) return isPreloader(true)

    return (
        <div className="app">
            <HashRouter>
                { state.auth.isAuth ? <AppHeaderContainer /> : null }
                <div className='app_container'>
                    {state.auth.isAuth ? <NavLinks /> : null}
                    <Routes>
                        <Route path="/" element={<ProfileContainer />} />
                        <Route path="/messages" element={<MessagesContainer />} />
                        <Route path="/profile/:profileId" element={<ProfileContainer myProfile={false}/>} />
                        <Route path="/profile" element={<ProfileContainer myProfile={true}/>} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/login' element={<LoginContainer />} />
                    </Routes>
                </div>

            </HashRouter>
        </div>
    )
}

export default App;
