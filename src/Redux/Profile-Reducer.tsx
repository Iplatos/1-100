import {ProfilePageType} from "./State";

export type ReduceProfileType = AddPostACType | UpdateNewPostTextACType /*| UpdateNewMessageBodyAC | SendNewMessageAC*/

type AddPostACType = ReturnType<typeof AddPostAC>

type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>




export const ProfileReducer = (state: ProfilePageType, action:ReduceProfileType) => {
    switch (action.type) {
        case "ADD-POST" :
            let newPost = {id: 5, message: action.payload.newText, likecount: 3}
            state.posts.push(newPost)
            state.newPostText = ""
            return state
      case "UPDATE-NEW_POST_TEXT" :
        state.newPostText = action.payload.text
          return state
        default :
            return state
    }

}
export let UpdateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW_POST_TEXT",
        payload: {text}
    } as const
}

export let AddPostAC = (newText: string) => {
    return {
        type: "ADD-POST",
        payload: {newText}
    } as const
}





