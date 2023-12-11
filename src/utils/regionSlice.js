import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name : 'region',
    initialState:{
        regionValue : null,

    },
    reducers:{
        addRegion(state,action){
            state.regionValue=action.payload
        }
    }

})

export const {addRegion} = regionSlice.actions
export default regionSlice.reducer