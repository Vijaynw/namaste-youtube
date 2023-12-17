import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name : 'region',
    initialState:{
        sideValue : true,

    },
    reducers:{
        toggleSidebar(state,action){
            state.sideValue=!state.sideValue
        }
    }

})

export const {toggleSidebar} = regionSlice.actions
export default regionSlice.reducer