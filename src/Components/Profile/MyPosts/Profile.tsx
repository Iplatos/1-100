import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts";
import {ProfileInfo} from "./Post/ProfileInfo/ProfileInfo";

export const Profile=()=>{
    return <div className={s.content}>
             <ProfileInfo/>
             <MyPosts/>
    </div>
}
