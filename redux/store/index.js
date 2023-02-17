import {configureStore} from '@reduxjs/toolkit'
import login from '../slice/login'
import messageSlice from '../slice/message'
import getAllData from '../slice/getAllData'
import deployFile from '../slice/deployFile'
export default configureStore({
    reducer: {
        login,
        messageSlice,
        getAllData,
        deployFile
    },
})