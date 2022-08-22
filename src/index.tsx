import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StateAppType,} from "./Redux/Store";

import App from './App';

import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import store, {AppStateType, StoreType} from "./Redux/ReduxStore";


export let rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 NewMessageBody={store.getState().dialogsPage.NewMessageBody} /*updateNewPostText={store._updateNewPostText.bind(store)}*/
                 dispatch={store.dispatch.bind(store)} store={store}/>
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
