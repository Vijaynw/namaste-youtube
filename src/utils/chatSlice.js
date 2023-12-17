import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        message:[]
    },
    reducers:{
        addMessage: (state,action)=>{
            if(state.message.length === 100){
                state.message.shift()
            }else{

                state.message.push(action.payload)
            }
        }
    }
})

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer