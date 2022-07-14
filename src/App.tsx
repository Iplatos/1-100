import React from 'react'

import './App.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/ProfileInfo/Profile";
import {Dialogs} from "./Components/Dailogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Music} from "./Components/Musik/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {StateAppType} from "./Redux/State";


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


const App = (props:StateAppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>


                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={props.profilePage}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.dialogsPage}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>

                    </Routes>
                </div>


            </div>
        </BrowserRouter>

    );
}
export default App;