import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import messagesReducer from "./messages-reducer";
import usersReducer from './users-reducer'
import profileReducer from './profile-reducer'
import auth from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./app-reducer";

//Form it's a reducer from library 'redux-form'
let reducers = combineReducers({
    appPage: appReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth,
    form : formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;