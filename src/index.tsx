import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPost, state, StateAppType, subcribe, updateNewPostText} from "./Redux/State";
import App from './App';

import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';


export let rerenderEntireTree=(state:StateAppType)=>{
    ReactDOM.render (
        <BrowserRouter>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}  />
        </BrowserRouter>, document.getElementById('root'));
}
subcribe(()=>rerenderEntireTree(state))
rerenderEntireTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
