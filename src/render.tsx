import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";
import {addPost, StateAppType, updateNewPostText} from "./Redux/State";
import ReactDOM from 'react-dom';



export let rerenderEntireTree=(state:StateAppType)=>{
  ReactDOM.render (
        <BrowserRouter>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}  />
        </BrowserRouter>, document.getElementById('root'));
}
/*
ReactDOM.render(<App />,  document.getElementById('root'));*/
