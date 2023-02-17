import {configureStore} from '@reduxjs/toolkit'
import login from '../slice/login'
import messageSlice from '../slice/message'
import getAllData from '../slice/getAllData'
import deployFile from '../slice/deployFile'
import register from '../slice/register'

export default configureStore({
    reducer: {
        login,
        messageSlice,
        getAllData,
        deployFile,
        register
    },
})