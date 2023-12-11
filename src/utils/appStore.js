import { configureStore } from "@reduxjs/toolkit";
import regionSlice from "./regionSlice";
const appStore =configureStore({
    reducer:{
        region : regionSlice

    }
    

})
export default appStore