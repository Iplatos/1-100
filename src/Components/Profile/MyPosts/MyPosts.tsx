import React from "react";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
               <div> <textarea></textarea></div>
                 <div> <button>Add post</button>
                     <button>Remove</button></div>
    <div>New post</div>


            <div className="posts">
                <div className={s.item}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DUVAqsASH7n0AuyqjyEXQ1lnWCQPB1qtbOG1bdhRzV--MTm0poqFcRKJaF8Uc5YhRe4&usqp=CAU"/> post1</div>
                <div className={s.item}>post2</div>
                <div className={s.item}>post3</div>
                <div className={s.item}>post4</div>
            </div>
        </div>)
}
