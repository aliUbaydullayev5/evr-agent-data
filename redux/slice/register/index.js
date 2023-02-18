import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const registerFetch = createAsyncThunk('registerFetch', async (payload)=> {


    return await fetch(`https://evrtourback.uz/api/v1/user/create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            id: payload.id ? payload.id : null,
            firstName: payload.firstName,
            lastName: payload.lastName,
            patron: payload.patron,
            phoneNumber: payload.phoneNumber.slice(1, -1),
            extraPhoneNumber: payload.extraPhoneNumber.slice(1, -1),
            passportSeries: payload.passportSeries,
            attachmentId: payload.attachmentId,
            attachmentPassportId: payload.attachmentPassportId,
            attachmentDiplomaId: payload.attachmentDiplomaId,
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
            console.log(payload)
            if(payload.success === true) {
                state.status = 'success'
            }
            else if(payload?.success === false){
                state.status = 'warning'
                state.message = payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [registerFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default register.reducer