import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const registerFetch = createAsyncThunk('registerFetch', async (payload)=> {
    // return await fetch(`https://evrtourback.uz/api/v1/user/create`, {
        return await fetch(`https://192.168.0.132:8086/api/v1/user/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            id: null,
            firstName: payload.firstName,
            lastName: payload.lastName,
            patron: payload.patron,
            phoneNumber: payload.phoneNumber,
            extraPhoneNumber: payload.extraPhoneNumber,
            passportSeries: payload.passportSeries,
            attachmentId: payload.attachmentId,
            attachmentPassportId: payload.attachmentPassportId,
            attachmentDiplomaId: payload.attachmentDiplomaId,
            attachmentUser: null,
            attachment: null,
            payments: null
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