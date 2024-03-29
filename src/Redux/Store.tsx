import {ProfileReducer} from "./Profile-Reducer";
import {DialogsReducer} from "./Dialogs-Reducer";
import reducerSideBar from "./ReducerSideBar";

export type PostType = {
    id: number,
    message: string,
    likecount: number
}

type MessageType = {
    id: number,
    message: string
}

type DialogType = {
    id: number,
    name: string
}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
}

export type DialogPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    NewMessageBody : string

}

export type StateAppType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: any

}
export type storePropsType = {
    _state:StateAppType
}


export const store = {
    _state: {

        profilePage: {

            posts: [
                {id: 1, message: "Hi! how are you?", likecount: 23},
                {id: 2, message: "Do you love me?", likecount: 33},

            ],
            newPostText: ""
        },

        dialogsPage: {
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
        },
        sideBar: {},
    },

    getState() {

        return this._state
    },
    _callSubscriber(props: StateAppType) {
        console.log("state is changed")
    },
    subcribe(observer: () => void) {
        this._callSubscriber = observer
    },
    /*_addPost(message: string) {

        let newPost = {id: 5, message: this._state.profilePage.newPostText, likecount: 3}
        this._state.profilePage.posts.push(newPost)

        this._updateNewPostText("")
        },


    _updateNewPostText(newText: string) {
     },
    */


    dispatch (action: any) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = reducerSideBar(this._state.sideBar, action)
        this._callSubscriber(this._state);
    }
       /* if (action.type === "ADD-POST") {
            let newPost = {id: 5, message: action.payload.newText, likecount: 3}
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = ""


        } else if (action.type === "UPDATE-NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.payload.newText
            this._callSubscriber(action.payload.newText);

        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.NewMessageBody = action.payload.body
            this._callSubscriber(this._state);

        }  else if (action.type === "SEND-NEW-MESSAGE") {
           /!* let body = this._state.dialogsPage.NewMessageBody*!/
            this._state.dialogsPage.NewMessageBody = ""
            this._state.dialogsPage.messages.push({id: 8, message: action.payload.body })
            this._callSubscriber(this._state);
        }
    }*/
}


/*

type AddPostACType = ReturnType<typeof AddPostAC>

type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>

type UpdateNewMessageBodyAC = ReturnType<typeof UpdateNewMessageBodyAC>

type SendNewMessageAC = ReturnType<typeof SendNewMessageAC>

export let AddPostAC = (newText: string) => {
    return {
        type: "ADD-POST",
        payload: {newText}
    } as const
}
export let UpdateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW_POST_TEXT",
        payload: {text}
    } as const
}
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
*/


//redux система управления состоянием
