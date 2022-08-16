import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

import {ReduceType} from "../../../App";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/Profile-Reducer";
import {PostType} from "../../../Redux/State";


type PostsPropsType = {
    posts: PostType[]
    /*addPost: (message: string) => void*/
    newPostText: string
    /*updateNewPostText: (text: string) => void*/
    dispatch: (text: ReduceType) => void
}


export const MyPosts = (props: PostsPropsType) => {

    let postsElement = props.posts.map(post => <Post key={post.message} message={post.message}
                                                     likecount={post.likecount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = AddPostAC(text)
            props.dispatch(action)

        }
        /*    let text = newPostElement.current?.value*/
        /*props.addPost(text)*/

    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = UpdateNewPostTextAC(text)
            props.dispatch(action)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/></div>
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
