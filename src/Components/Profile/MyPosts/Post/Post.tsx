import React from "react";
import s from "./Post.module.css"


type PostPropsType = {
    message: string
    likecount: number
}

export const Post = (props: PostPropsType) => {
    return (<div>
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DUVAqsASH7n0AuyqjyEXQ1lnWCQPB1qtbOG1bdhRzV--MTm0poqFcRKJaF8Uc5YhRe4&usqp=CAU"/>
            {props.message}
            <span> liked {props.likecount}</span>
        </div>

    </div>)
}
