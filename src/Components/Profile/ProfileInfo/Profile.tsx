import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../MyPosts/Post/ProfileInfo/ProfileInfo";
import {ProfilePageType, updateNewPostText} from "../../../Redux/State";



type ProfilePagePropsType = {
    profilePage:ProfilePageType
    addPost:(message:string)=>void
    newPostText:string
    updateNewPostText:(text:string)=>void
}

export const Profile=(props:ProfilePagePropsType)=>{

    return <div className={s.content}>
             <ProfileInfo/>
             <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} posts={props.profilePage.posts}/>
    </div>
}
