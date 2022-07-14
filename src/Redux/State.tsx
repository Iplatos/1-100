export type PostType = {
    id:number,
    message:string,
    likecount:number
}

type MessageType = {
    id:number,
    message:string
}

type DialogType = {
    id:number,
    name:string
}

export type ProfilePageType = {
    posts:PostType[]
}

export type DialogPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
}

export type StateAppType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
}

export let state:StateAppType={
    profilePage: {

        posts: [
            {id:1, message:"Hi! how are you?", likecount: 23 },
            {id:2, message:"Do you love me?", likecount: 33 }
        ],
    },

   dialogsPage: {
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "how are you"},
            {id: 3, message: "where is my money?"},
            {id: 4, message: "ku ku "},
            {id: 5, message: "i've lost my keys"}
        ],
        dialogs :[
            {id: 1, name: "Dimych"},
            {id: 2, name: "Igor"},
            {id: 3, name: "Pepsi"},
            {id: 4, name: "Gena"},
            {id: 5, name: "Kolya"}
        ],}
}