import {SendNewMessageAC} from "./Dialogs-Reducer";

let initialState = {}
type reducerSideBarACType = ReturnType < typeof reducerSideBarAC >


const reducerSideBarAC = () => {
    return {
        type: "A"
    } as const
}


const reducerSideBar = (state = initialState, action: reducerSideBarACType) => {
    switch (action.type) {
        case "A" :
            return state
        default:
            return state
    }

}


export default reducerSideBar



