import React from "react";
import {SendNewMessageAC, UpdateNewMessageBodyAC} from "../../Redux/Dialogs-Reducer";
import {Dialogs} from "./Dialogs";
import store, {StoreType} from "../../Redux/ReduxStore";
import {connect} from "react-redux";


type MyDialogsContainerType = {
    store: StoreType
}


let mapStateToProps = ( ) => {
    return{
       dialogsPage:store.getState().dialogsPage
    }
}
let mapDispatchToProps = () => {
    return {
        updateNewMessageBody: (body: string) => {
            store.dispatch(UpdateNewMessageBodyAC(body))
        },
        onSendMessageClick:  (body:string) => {

            store.dispatch(SendNewMessageAC(body))
        }


    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)