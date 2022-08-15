import React, {MouseEventHandler} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType, SendNewMessageAC, storePropsType, UpdateNewMessageBodyAC} from "../../Redux/State";


type DialogsPropsType={
    dialogsPage: DialogPageType
    NewMessageBody: string
    store:storePropsType
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
    let newMessageBody =props.NewMessageBody

let onSendMessageClick = () => {
    props.store.getState() (SendNewMessageAC())
}

    let onNewMessageChange = (e: MouseEventHandler<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value
        props.store.dispatch(UpdateNewMessageBodyAC(body))
}

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>{DialigsElements}</div>


            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <div> <textarea value={newMessageBody} onClick={onNewMessageChange} placeholder={"Enter Your Message"}></textarea> </div>
                    <div> <button onClick={onSendMessageClick} > Send </button> </div>


                </div>

            </div>

        </div>

    )
}