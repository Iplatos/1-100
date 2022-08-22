import React from 'react';
import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./Profile-Reducer";
import {DialogsReducer} from "./Dialogs-Reducer";
import reducerSideBar from "./ReducerSideBar";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sideBar: reducerSideBar
})


let store = createStore(reducers)
export type StoreType = typeof store
export type AppStateType = ReturnType<typeof reducers>
export default store


/*
window.store = store*/
