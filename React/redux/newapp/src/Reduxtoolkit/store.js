import { configureStore } from "@reduxjs/toolkit";
import valueReducer from './slice.js'
import apislice from './Asyncthunk.js'

const store=configureStore({
    reducer:{
        value:valueReducer,
        datavalue:apislice
    }
})

export default store