import { createSlice } from "@reduxjs/toolkit"

let vvslice=createSlice({
    name:'vv',
    initialState:{
        items:[]
    }
    ,reducers:{
        addvote:(state,action)=>
        {
            state.items.push(action.payload)
        }
    }

})
export const {addvote}=vvslice.actions;
export default vvslice.reducer;