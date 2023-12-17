import { configureStore } from "@reduxjs/toolkit";
import regionSlice from "./regionSlice";
import chatSlice from "./chatSlice";
const appStore =configureStore({
    reducer:{
        sidebar : regionSlice,
        chat:chatSlice

    }
    

})
export default appStore