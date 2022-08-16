import {DialogPageType} from "./State";

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


export const DialogsReducer = (state: DialogPageType, action: ReduceDialogsType) => {
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