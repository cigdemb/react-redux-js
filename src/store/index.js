import { configureStore } from "@reduxjs/toolkit";
import  themeSlice  from "./slices/theme-slice";
import localeSlice from "./slices/locale-slice";

//this our central state, ever slice should be introduced here
export default configureStore({
    reducer: {
        theme: themeSlice,
        locale: localeSlice
        
    }
})