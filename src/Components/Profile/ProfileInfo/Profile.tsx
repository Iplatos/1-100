import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../MyPosts/Post/ProfileInfo/ProfileInfo";
import {ProfilePageType, storePropsType} from "../../../Redux/State";
import {ReduceType} from "../../../App";


type ProfilePagePropsType = {
    profilePage:ProfilePageType
    /*addPost:(message:string)=>void*/
    newPostText:string
   /* updateNewPostText:(text:string)=>void*/
    dispatch: (text: ReduceType) => void
    store:storePropsType
}

export const Profile=(props:ProfilePagePropsType)=>{

    return <div className={s.content}>
             <ProfileInfo/>
             <MyPosts /*addPost={props.addPost}*/ dispatch={props.dispatch} newPostText={props.newPostText}
                      posts={props.profilePage.posts}/>
    </div>
}
