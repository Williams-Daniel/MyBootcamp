import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: ""|| null,
}

const globalState   = createSlice({
    name:"globalState",
    initialState,
    reducers:{
        signUserGlobal : (state:any,{payload}:any)=>{
            state.user = payload
        },
        logOut:(state:any)=>{
            state.user = null
        }
    }
})

export const {signUserGlobal,logOut} = globalState.actions

export default globalState.reducer