import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id
    return (<div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
const Message = (props: any) => {
    return <div className={s.messages}>{props.message}</div>
}


export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Pepsi"},
        {id: 4, name: "Gena"},
        {id: 5, name: "Kolya"}
    ]
    let messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you"},
        {id: 3, message: "where is my money?"},
        {id: 4, message: "ku ku "},
        {id: 5, message: "i've lost my keys"}
    ]
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>


            </div>
        </div>

    )
}