import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const registerFetch = createAsyncThunk('registerFetch', async (payload)=> {

    return await fetch(`https://evrtourback.uz/api/v1/user/create`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            id: payload.id ? payload.id : '',
            firstName: payload.firstName,
            lastName: payload.lastName,
            patron: payload.patron,
            phoneNumber: payload.phoneNumber.match(/[0-9]+/g).join(''),
            extraPhoneNumber: payload.extraPhoneNumber.match(/[0-9]+/g).join(''),
            passportSeries: payload.passportSeries || '',
            attachmentId: (payload?.attachment?.id ? payload.attachment.id : payload.attachmentId) || '',
            attachmentPassportId: (payload?.attachmentPassport?.id ? payload.attachmentPassport.id : payload.attachmentPassportId) || '',
            attachmentDiplomaId: (payload?.attachmentDiploma?.id ? payload.attachmentDiploma.id : payload.attachmentDiplomaId) || '',
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
                state.message = payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [registerFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default register.reducer