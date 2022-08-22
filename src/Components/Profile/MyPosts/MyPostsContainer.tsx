import React from "react";

import {ReduceType} from "../../../App";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/Profile-Reducer";
import {PostType} from "../../../Redux/Store";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../Redux/ReduxStore";


type MyPostsContainerType = {
    store: StoreType
}


export const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState()
    let addPost = (newText: string) => {
        props.store.dispatch(AddPostAC(newText))

    }
    /*    let text = newPostElement.current?.value*/
    /*props.addPost(text)*/

    let onPostChange = (text: string) => {
        let action = UpdateNewPostTextAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

