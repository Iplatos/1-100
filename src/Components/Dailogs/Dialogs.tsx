import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/State";


type DialogsPropsType={
    dialogsPage: DialogPageType
}

export const Dialogs = (props:DialogsPropsType) => {

    /*let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Pepsi"},
        {id: 4, name: "Gena"},
        {id: 5, name: "Kolya"}
    ]
    let messages = [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you"},
        {id: 3, message: "where is my money?"},
        {id: 4, message: "ku ku "},
        {id: 5, message: "i've lost my keys"}
    ]*/
    let DialigsElements= props.dialogsPage.dialogs.map(dialog=> <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement=props.dialogsPage.messages.map(messages=> <Message message={messages.message}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialigsElements}

            </div>
            <div className={s.messages}>
                {messagesElement}


            </div>
            <textarea></textarea>
        </div>

    )
}