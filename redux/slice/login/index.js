import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const loginFetch = createAsyncThunk('loginFetch', async ({userName, password})=> {
    // return await fetch(`https://evrtourback.uz/api/v1/auth/login`, {
    return await fetch(`http://192.168.0.132:8086/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({userName, password}),
    }).then((res)=> res.json())
})


const login = createSlice({
    name: 'login',
    initialState: {
        status: null,
        message: '',
    },
    extraReducers: {
        [loginFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [loginFetch.fulfilled]: (state, {payload})=> {
            if(payload.success === true) {
                state.status = 'success'
                localStorage.setItem('accessToken', payload.data.accessToken)
            }
            else if(payload?.success === false){
                state.status = 'warning'
                state.message = payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [loginFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})



export default login.reducer