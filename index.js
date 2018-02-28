import { AppRegistry } from 'react-native';
import React from 'react';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './src/App';
import reducers from './src/reducers';

const store = createStore(reducers);

const AppProvider = () => 
    <Provider store={ store }>
        <App />
    </Provider>

AppRegistry.registerComponent('redux_counter', () => AppProvider);
