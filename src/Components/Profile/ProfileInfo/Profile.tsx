import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "../MyPosts/Post/ProfileInfo/ProfileInfo";
import {StoreType} from "../../../Redux/ReduxStore";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";


type ProfilePagePropsType = {

    store:StoreType
    children:any
}

export const Profile=()=>{

    return <div className={s.content}>
             <ProfileInfo/>
             <MyPostsContainer /*store={props.store} *//*addPost={props.addPost}*/ /* newPostText={props.newPostText}
                      posts={props.profilePage.posts}*//>
    </div>
}
