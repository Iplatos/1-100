import React from 'react'

import './App.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/MyPosts/Profile";
import {Dialogs} from "./Components/Dailogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Music} from "./Components/Musik/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";

/*c 25 start*/

const App = () => {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Nav/>


                    <div className={'app-wrapper-content'}>
                        <Routes>
                            <Route path="/profile" element ={<Profile />} />
                            <Route path="/dialogs/*" element ={<Dialogs />} />
                            <Route path="/news" element ={<News />} />
                            <Route path="/music" element ={<Music />} />
                            <Route path="/settings" element ={<Settings />} />

                        </Routes>
                    </div>


            </div>
        </BrowserRouter>

    );
}
export default App;