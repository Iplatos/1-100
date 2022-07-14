import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/State";



type PostsPropsType = {
    posts: PostType[]
}

export const MyPosts = (props:PostsPropsType) => {
/*let posts=[
    {id:1, message:"Hi! how are you?", likecount: 23 },
    {id:2, message:"Do you love me?", likecount: 33 }
]*/
let postsElement= props.posts.map(post=><Post message={post.message} likecount={post.likecount} />)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
               <div> <textarea></textarea></div>
                 <div> <button>Add post</button>
                     <button>Remove</button></div>
    <div>New post</div>


            <div className={s.posts}>
                {postsElement}

            </div>
        </div>)
}
