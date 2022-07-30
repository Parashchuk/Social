import React from 'react';
import {createRoot} from 'react-dom/client'
import AppContainer from './app-container';
import store from './redux/store'
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
);

