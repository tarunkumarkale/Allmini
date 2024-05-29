import { configureStore } from "@reduxjs/toolkit";

const Store=configureStore({
    reducer:{
        custom:CustomReducer
    }
})


export default Store