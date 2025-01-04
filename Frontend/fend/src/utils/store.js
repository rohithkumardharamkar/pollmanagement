import {configureStore} from '@reduxjs/toolkit'

import vvReducer from './vvslice';
import userReducer from './userslice';


let store=configureStore({
    reducer:{
        vv:vvReducer,
        user:userReducer
       
    }
})
export default store