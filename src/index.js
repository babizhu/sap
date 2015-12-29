import React from 'react';
import { render } from 'react-dom';
//import { App } from './App';

//import 'babel-core/polyfill'
import { Provider } from 'react-redux'
//import App from './experiment/async/containers/App'
//import configureStore from './experiment/async/store/configureStore'

import configureStore from './experiment/sidebar/store/configureStore'
import App from './experiment/sidebar/containers/App'

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

