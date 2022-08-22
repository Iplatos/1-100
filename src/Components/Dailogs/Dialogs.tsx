import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/Store";
import {ReduceDialogsType, SendNewMessageAC, UpdateNewMessageBodyAC} from "../../Redux/Dialogs-Reducer";


export type DialogsStorePropsType = {
    dialogsPage: DialogPageType
    NewMessageBody: string
    /*  store: storePropsType*/
    updateNewMessageBody: (body:string)=>void
    onSendMessageClick:()=>void
}

export const Dialogs = (props: DialogsStorePropsType) => {
let state = props.dialogsPage
    let DialigsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.name} name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.dialogsPage.messages.map(messages => <Message message={messages.message}/>)
    let newMessageBody = props.NewMessageBody
    /*let state = props.store.getState()*/

    let onSendMessageClick = () => {

      props.onSendMessageClick()
    }

    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
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