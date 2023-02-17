import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getImgFetch = createAsyncThunk('getImgFetch', async (payload)=> {
    // https://evrtourback.uz/api/v1/attachment/download/878c3eba-261e-46e4-9a77-68f6235e3d21
    // return await fetch(`https://evrtiurback.uz/api/v1/attachment/download/${payload.id}`, {
    return await fetch(`https://evrtourback.uz/api/v1/attachment/download/878c3eba-261e-46e4-9a77-68f6235e3d21`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
        }
    })
})

const getImg = createSlice({
    name: 'getImg',
    initialState: {
        status: null,
        message: '',
        data: null
    },
    extraReducers: {
        [getImgFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [getImgFetch.fulfilled]: (state, {payload})=> {
            if(payload.success === true) {
                state.status = 'success'
                state.data = payload
            }
            else if(payload?.success === false){
                state.status = 'warning'
            }
        },
        [getImgFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default getImg.reducer