import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
let postsData=[
    {id:1, message:"Hi! how are you?", likecount: 23 },
    {id:2, message:"Do you love me?", likecount: 33 }
]


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
               <div> <textarea></textarea></div>
                 <div> <button>Add post</button>
                     <button>Remove</button></div>
    <div>New post</div>


            <div className={s.posts}>
               <Post message={postsData[0].message} likecount={postsData[0].likecount} />
               <Post message={postsData[1].message} likecount={postsData[1].likecount}/>

            </div>
        </div>)
}
