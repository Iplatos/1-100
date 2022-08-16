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
import { StateAppType, storePropsType} from "./Redux/State";
import {ReduceDialogsType} from "./Redux/Dialogs-Reducer";
import {ReduceProfileType} from "./Redux/Profile-Reducer";
/// 40 vid last 10 min

export type ReduceType = ReduceProfileType | ReduceDialogsType

export type AppPropsType = {
    state: StateAppType
    /*addPost: (message: string) => void
    updateNewPostText: (text: string) => void*/
    dispatch: (action: ReduceType) => void
    NewMessageBody: string
    store: storePropsType
}


const App = (props: AppPropsType) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Nav/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile"
                           element={<Profile newPostText={props.state.profilePage.newPostText}
                                             profilePage={props.state.profilePage}
                                             dispatch={props.dispatch}
                                             store={props.store}
                               /*updateNewPostText={props.updateNewPostText}*/
                           />}/>
                    newPostText
                    <Route path="/dialogs/*" element={<Dialogs NewMessageBody={props.NewMessageBody}
                                                               //store={props.store}
                                                               dispatch={props.dispatch}
                                                               dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>

                </Routes>
            </div>


        </div>


    );
}
export default App;