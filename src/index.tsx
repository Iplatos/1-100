import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store,  StateAppType, } from "./Redux/State";
import App from './App';

import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';


export let rerenderEntireTree=(state:StateAppType)=>{
    ReactDOM.render (
        <BrowserRouter>
            <App state={store.getState()} NewMessageBody={store._state.dialogsPage.NewMessageBody} /*updateNewPostText={store._updateNewPostText.bind(store)}*/
                 dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>, document.getElementById('root'));
}
store.subcribe(()=>rerenderEntireTree(store._state))
rerenderEntireTree(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
