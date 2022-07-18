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
import {StateAppType, updateNewPostText} from "./Redux/State";

/*ачинатьс 35*/
/*export type statePropsType={
    profilePage:ProfilePageType
    dialogsPage:DialogsPagePropstype
}
export type ProfilePageType={
    posts:postsPropsType[]
}

export type postsPropsType={
    id:number
    message:string
    likecount:number
}

type dialogsPropsType={
    id:number
    name:string
}
type MessagePropsType={
    id:number
    message:string
}
export type DialogsPagePropstype={
    messages:MessagePropsType[]
    dialogs:dialogsPropsType[]
}*/

export type AppPropsType = {
    state: StateAppType
    addPost:(message:string)=>void
    updateNewPostText:(text:string)=>void
}


const App = (props:AppPropsType) => {

    return (

    <div className="app-wrapper">
                <Header/>
                <Nav/>


                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile newPostText={props.state.profilePage.newPostText}
                                   profilePage={props.state.profilePage}
                                                 addPost={props.addPost}
                                                 updateNewPostText={props.updateNewPostText}
                               />}/>
                        newPostText
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>

                    </Routes>
                </div>


            </div>


    );
}
export default App;