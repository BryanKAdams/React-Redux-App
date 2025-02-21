import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

//Import Reducer 
import reducer from './reducers';
//created a store that receives reducer and middleware parameters
//thunk calls dispatch on functions to turn them into objects
//for the reducer to handle
const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
    //Wrap App Component in Provider component and give it a store
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
