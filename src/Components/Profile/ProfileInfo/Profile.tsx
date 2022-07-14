import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../MyPosts/Post/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../Redux/State";



type ProfilePagePropsType = {
    profilePage:ProfilePageType
}

export const Profile=(props:ProfilePagePropsType)=>{

    return <div className={s.content}>
             <ProfileInfo/>
             <MyPosts posts={props.profilePage.posts}/>
    </div>
}
