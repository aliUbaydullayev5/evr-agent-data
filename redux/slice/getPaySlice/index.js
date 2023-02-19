import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const paySlicePostFetch = createAsyncThunk('paySlicePostFetch', async ({data})=> {
    console.log(data, 'data')
    return await fetch(`https://evrtourback.uz/api/v1/payment/create-payment-history`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            id: data.id ? data.id : '',
            userId: data.userId,
            paidAmount: data.paidAmount,
            description: data.description,
            paymentType: data.paymentType,
            priceFileId: data.priceFileId
        }),
    }).then((res)=> res.json())
})


const payPostSlice = createSlice({
    name: 'payPostSlice',
    initialState: {
        status: null,
        message: '',
    },
    extraReducers: {
        [paySlicePostFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [paySlicePostFetch.fulfilled]: (state, {payload})=> {
            if(payload.success === true) {
                state.status = 'success'
            }
            else if(payload?.success === false){
                state.status = 'warning'
            }
        },
        [paySlicePostFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default payPostSlice.reducer