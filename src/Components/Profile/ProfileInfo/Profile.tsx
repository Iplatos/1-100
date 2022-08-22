import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "../MyPosts/Post/ProfileInfo/ProfileInfo";
import {ProfilePageType, storePropsType} from "../../../Redux/Store";
import {ReduceType} from "../../../App";
import {StoreType} from "../../../Redux/ReduxStore";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";


type ProfilePagePropsType = {

    store:StoreType
}

export const Profile=(props:ProfilePagePropsType)=>{

    return <div className={s.content}>
             <ProfileInfo/>
             <MyPostsContainer store={props.store}  /*addPost={props.addPost}*/ /* newPostText={props.newPostText}
                      posts={props.profilePage.posts}*//>
    </div>
}
