import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const registerFetch = createAsyncThunk('registerFetch', async (payload)=> {
    return await fetch(`https://evrtourback.uz/api/v1/user/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            // payload.id: "",
            // payload.firstName: "Ulug",
            // payload.lastName: null,
            // payload.patron: null,
            // payload.phoneNumber: "+998993890928",
            // payload.extraPhoneNumber: null,
            // payload.passportSeries: null,
            // payload.attachmentId: null,
            // payload.attachmentUser: null,
            // payload.attachment: null,
            // payload.payments: []
        })
    }).then((res)=> res.json())
})

const register = createSlice({
    name: 'register',
    initialState: {
        status: null,
        message: '',
    },
    extraReducers: {
        [registerFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [registerFetch.fulfilled]: (state, {payload})=> {
            if(payload.success === true) {
                state.status = 'success'
            }
            else if(payload?.success === false){
                state.status = 'warning'
            }
        },
        [registerFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default register.reducer