import s from "./MyPosts.module.css"

import React from "react";
import Post from "./MyPost1";



const MyPosts = ()=>{
    return (<div>my posts
        <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
    </div>
        <div className={s.item}>new post</div>
       <Post message={"Hi,TY &Fy"} likes={12}/>
       <Post message={"firstPOst"} likes={24} />

        <div className={s.item}>post2</div>
        <div className={s.item}>post3</div>
    </div>)
}

export default MyPosts