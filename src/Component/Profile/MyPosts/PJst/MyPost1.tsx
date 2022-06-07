import React from "react";
import s from "./MyPost1.module.css"



export type PostPropsType={
    message:string
    likes:number
}

const Post = (props:PostPropsType)=>{

    return (



        <div className={s.item}>
            <img src = "https://img4.goodfon.ru/wallpaper/nbig/8/7f/hotline-miami-hotline-miami-synthpop-synth-retrowave-darkw-1.jpg"/>
            <div >{props.message}</div>
            <div>likes{props.likes}</div>
<div>

        </div>
        </div>
            )
}

export default Post