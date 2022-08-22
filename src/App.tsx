import React from 'react'

import './App.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/ProfileInfo/Profile";
import {Dialogs} from "./Components/Dailogs/Dialogs";
import {Route, Routes} from 'react-router-dom'
import {Music} from "./Components/Musik/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {StateAppType, storePropsType} from "./Redux/Store";
import {ReduceDialogsType} from "./Redux/Dialogs-Reducer";
import {ReduceProfileType} from "./Redux/Profile-Reducer";
import {AppStateType, StoreType} from "./Redux/ReduxStore";
import {Dispatch} from "redux";
import {DialogsContainer} from "./Components/Dailogs/DialogsContainer";
///45 vid start

export type ReduceType = ReduceProfileType | ReduceDialogsType

export type AppPropsType = {
    state: AppStateType
    /*addPost: (message: string) => void
    updateNewPostText: (text: string) => void*/
    dispatch: Dispatch
    NewMessageBody: string
    store: StoreType
}


const App = (props: AppPropsType) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Nav/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile"
                           element={<Profile
                               store={props.store}
                               /*updateNewPostText={props.updateNewPostText}*/
                           />}/>
                    newPostText
                    <Route path="/dialogs/*" element={<DialogsContainer
                        store={props.store}/>}/>

                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>

                        </Routes>
                        </div>


                        </div>


                        );
                    }
                           export default App;