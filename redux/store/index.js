import {configureStore} from '@reduxjs/toolkit'
import login from '../slice/login'
import messageSlice from '../slice/message/index'
export default configureStore({
    reducer: {
        login,
        messageSlice
    },
})