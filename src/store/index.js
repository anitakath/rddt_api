
import { configureStore } from "@reduxjs/toolkit";


//SLICES
import filterReducer from './filterSlice'
import authReducer from "./authSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        filter: filterReducer,
        
    }

})

export default store