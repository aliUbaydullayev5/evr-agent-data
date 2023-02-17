import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getAllDataFetch = createAsyncThunk('getAllDataFetch', async ()=> {

    // return await fetch(`https://evrtourback.uz/api/v1/user/get`, {
    return await fetch(`https://192.168.0.132:8086/api/v1/user/get`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
        }
    }).then((res)=> res.json())

})

const getAllData = createSlice({
    name: 'getAllData',
    initialState: {
        status: null,
        message: '',
    },
    extraReducers: {
        [getAllDataFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getAllDataFetch.fulfilled]: (state, {payload})=> {
            if(payload.success === true) {
                state.status = 'success'
            }
            else if(payload?.success === false){
                state.status = 'warning'
            }
        },
        [getAllDataFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default getAllData.reducer