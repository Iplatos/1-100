import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import Nav from "./Component/Nav/Nav";
import Profile from "./Component/Profile/Profile";
import {Dialogs} from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom"

// почитай про гриды!!!!
/*(это я не тебе
 бэм методология
 12.06 video 14)*/
const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>


            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialog" element= {<Dialogs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
            </Routes>

            </div>



        </div>
        </BrowserRouter>)
}



export default App
