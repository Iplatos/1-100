import React, {ChangeEventHandler, LegacyRef, MouseEventHandler} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType, updateNewPostText} from "../../../Redux/State";


type PostsPropsType = {
    posts: PostType[]
    addPost:(message:string)=>void
    newPostText:string
    updateNewPostText:(text:string)=>void
}

export const MyPosts = (props: PostsPropsType) => {
    /*let posts=[
        {id:1, message:"Hi! how are you?", likecount: 23 },
        {id:2, message:"Do you love me?", likecount: 33 }
    ]*/
    let postsElement = props.posts.map(post => <Post message={post.message} likecount={post.likecount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    let addPost = () => {
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)

        }
    /*    let text = newPostElement.current?.value*/
        /*props.addPost(text)*/

    }
    let onPostChange=()=>{
        if (newPostElement.current){
            props.updateNewPostText(newPostElement.current.value)}


    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText}  ref={newPostElement}/></div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div>New post</div>


            <div className={s.posts}>
                {postsElement}

            </div>
        </div>)
}
