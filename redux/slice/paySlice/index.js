import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const paySliceFetch = createAsyncThunk('loginFetch', async ({userId})=> {
    return await fetch(`https://evrtourback.uz/api/v1/payment/get-payment-history`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            userId
        }),
    }).then((res)=> res.json())
})


const paySlice = createSlice({
    name: 'login',
    initialState: {
        status: null,
        message: '',
    },
    extraReducers: {
        [paySliceFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [paySliceFetch.fulfilled]: (state, {payload})=> {
            if(payload.success === true) {
                state.status = 'success'
            }
            else if(payload?.success === false){
                state.status = 'warning'
            }
        },
        [paySliceFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default paySlice.reducer