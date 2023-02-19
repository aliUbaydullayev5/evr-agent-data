import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const payGetFetch = createAsyncThunk('payGetFetch', async ({id})=> {
    return await fetch(`https://evrtourback.uz/api/v1/payment/get-payment-history/by-user?userId=${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    }).then((res)=> res.json())
})


const payGet = createSlice({
    name: 'payPostSlice',
    initialState: {
        status: null,
        message: '',
        data: []
    },
    extraReducers: {
        [payGetFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [payGetFetch.fulfilled]: (state, {payload})=> {
            if(payload.success === true) {
                state.status = 'success'
                state.data = payload.data
            }
            else if(payload?.success === false){
                state.status = 'warning'
            }
        },
        [payGetFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default payGet.reducer