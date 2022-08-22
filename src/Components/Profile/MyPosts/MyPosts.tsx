import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/Store";


type PostsType = {
    posts: PostType[]
    addPost: (newText: string) => void
    newPostText: string
    updateNewPostText: (text: string) => void
   /* dispatch: (text: ReduceType) => void*/
}


export const MyPosts = (props: PostsType) => {

    let postsElement = props.posts.map(post => <Post key={post.message} message={post.message}
                                                     likecount={post.likecount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let OnAddPost = () => {
        props.addPost(props.newPostText)

    }
        /*    let text = newPostElement.current?.value*/
        /*props.addPost(text)*/

    let onPostChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        if (event.currentTarget.value) {
            let text = event.currentTarget.value
                props.updateNewPostText(text)

        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/></div>
            <div>
                <button onClick={OnAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div>New post</div>


            <div className={s.posts}>
                {postsElement}

            </div>
        </div>)
}
