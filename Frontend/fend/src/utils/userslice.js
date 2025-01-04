import { createSlice } from "@reduxjs/toolkit";

let userslice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addusers:(state,action)=>
        {
            return action.payload
        }
        ,removeuser:(state,action)=>
        {
            return null;
        }
    }
})
export const {addusers,removeuser}=userslice.actions
export default userslice.reducer;