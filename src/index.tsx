import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';

import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import store, {AppStateType} from "./Redux/ReduxStore";
import {Provider} from "react-redux";



export let rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
