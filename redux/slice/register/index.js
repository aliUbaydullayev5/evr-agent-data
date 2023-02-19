import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const registerFetch = createAsyncThunk('registerFetch', async (payload)=> {

    console.log(payload?.attachmentPassport?.id ? payload.attachmentPassport.id : payload.attachmentPassportId)

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
            passportSeries: payload.passportSeries,
            attachmentId: payload?.attachment?.id ? payload.attachment.id : payload.attachmentId,
            attachmentPassportId: payload?.attachmentPassport?.id ? payload.attachmentPassport.id : payload.attachmentPassportId,
            attachmentDiplomaId: payload?.attachmentDiploma?.id ? payload.attachmentDiploma.id : payload.attachmentDiplomaId,
            payments: null
        })
    }).then((res)=> res.json())
})

// {
//     "firstName": "sadas",
//     "lastName": "dasdas",
//     "patron": "dsadasdsa",
//     "phoneNumber": "998332407746",
//     "extraPhoneNumber": "998950797740",
//     "passportSeries": "DB4342342",
//     "attachmentId": "e489ccbf-d4d6-4a99-a7df-0b36bb15dd80",
//     "attachmentPassportId": "bc94c2da-75c8-4658-9e51-5083418607f4",
//     "attachmentDiplomaId": "a1737a7d-788f-4751-a52d-511a6cd29e6f",
//     "payments": null
// }


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