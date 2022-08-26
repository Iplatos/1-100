import React from "react";

import {ReduceType} from "../../../App";
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redux/Profile-Reducer";
import {PostType} from "../../../Redux/Store";
import {MyPosts} from "./MyPosts";
import store, {StoreType} from "../../../Redux/ReduxStore";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";



type MyPostsContainerType = {
    store: StoreType
}



const mapStateToProps = () => {
   return {
       posts : store.getState().profilePage.posts,
       newPostText: store.getState().profilePage.newPostText
   }
}

const mapDispatchToProps = () => {
    return {
        updateNewPostText: (text: string) => {
            let action = UpdateNewPostTextAC(text)
            store.dispatch(action)
        },
        addPost: (newText: string) => {
            store.dispatch(AddPostAC(newText))

        }


    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
