import {DialogPageType} from "./Store";

export type ReduceDialogsType = UpdateNewMessageBodyAC | SendNewMessageAC


type UpdateNewMessageBodyAC = ReturnType<typeof UpdateNewMessageBodyAC>

type SendNewMessageAC = ReturnType<typeof SendNewMessageAC>

export let UpdateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        payload: {body}
    } as const
}
export let SendNewMessageAC = (body: string) => {
    return {
        type: "SEND-NEW-MESSAGE",
        payload: {body}
    } as const
}

let initialState = {
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "how are you"},
        {id: 3, message: "where is my money?"},
        {id: 4, message: "ku ku "},
        {id: 5, message: "i've lost my keys"}
    ],
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Pepsi"},
        {id: 4, name: "Gena"},
        {id: 5, name: "Kolya"}
    ],
    NewMessageBody : ""
}

export const DialogsReducer = (state=initialState, action: ReduceDialogsType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.NewMessageBody = action.payload.body
            return state
        case "SEND-NEW-MESSAGE":
            state.NewMessageBody = ""
            state.messages.push({id: 8, message: action.payload.body})
            return state
        default:
            return state
    }
}