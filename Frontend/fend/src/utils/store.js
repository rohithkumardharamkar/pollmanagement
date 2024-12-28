import {configureStore} from '@reduxjs/toolkit'

import vvReducer from './vvslice';

let store=configureStore({
    reducer:{
        vv:vvReducer
       
    }
})
export default store