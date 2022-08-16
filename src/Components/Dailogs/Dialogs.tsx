import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/State";
import {ReduceDialogsType, SendNewMessageAC, UpdateNewMessageBodyAC} from "../../Redux/Dialogs-Reducer";


export type DialogsPropsType = {
    dialogsPage: DialogPageType
    NewMessageBody: string
    /*  store: storePropsType*/
    dispatch: (text: ReduceDialogsType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

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
    let DialigsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.name} name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.dialogsPage.messages.map(messages => <Message message={messages.message}/>)
    let newMessageBody = props.NewMessageBody
    /*let state = props.store.getState()*/

    let onSendMessageClick = () => {

        props.dispatch(SendNewMessageAC(props.NewMessageBody))
    }

    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value
        props.dispatch(UpdateNewMessageBodyAC(body))
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialigsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div> <textarea onChange={onNewMessageChange} value={newMessageBody}
                                   placeholder={"Enter Your Message"}></textarea> </div>
                    <div>
                        <button onClick={onSendMessageClick}> Send</button>
                    </div>

                </div>

            </div>

        </div>

    )
}