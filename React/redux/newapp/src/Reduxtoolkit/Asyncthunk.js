import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const thunkfun=createAsyncThunk('api/data',()=>{
    return axios.get('https://dummyjson.com/products')
    .then((res)=>{
        console.log(res.data.products,'response');
        return res.data.products
    })
})


const apislice = createSlice({
    name: "data",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(thunkfun.fulfilled, (state, action) => {
          return action.payload;
        })
        .addCase(thunkfun.rejected, (state, action) => {
          return action.payload;
        });
    },
  });



export {thunkfun}
export default apislice.reducer