import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/Store";
import {ReduceDialogsType, SendNewMessageAC, UpdateNewMessageBodyAC} from "../../Redux/Dialogs-Reducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../Redux/ReduxStore";


type MyDialogsContainerType = {
    store: StoreType
}

export const DialogsContainer = (props: MyDialogsContainerType) => {
let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {

        props.store.dispatch(SendNewMessageAC(props.store.getState().dialogsPage.NewMessageBody))
    }

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(UpdateNewMessageBodyAC(body))
    }

    return (

       <Dialogs updateNewMessageBody={onNewMessageChange} NewMessageBody={props.store.getState().dialogsPage.NewMessageBody}  dialogsPage={state} onSendMessageClick={onSendMessageClick} />

    )
}