import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const deployFileFetch = createAsyncThunk('deployFetchData', async (payload)=> {
    let formData = new FormData()
    formData.append('file', payload.file.target.files[0])
    return await fetch(`https://evrtourback.uz/api/v1/attachment/upload`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        method: 'POST',
        body: formData
    })
        .then((res)=> res.json())
        .then((json)=> {
            return {...json, by: payload.by}
        })
})

const deployFile = createSlice({
    name: 'deployFile',
    initialState: {
        fileId: '',
        status: null,
        by: ''
    },
    extraReducers: {
        [deployFileFetch.pending]: (state)=> {
            state.status = 'loading'
        },
        [deployFileFetch.fulfilled]: (state, {payload})=> {
            const {success, data, by} = payload
            if(success == true){
                state.status = 'success'
                state.fileId = data
                state.by = by
            }
            else if(payload?.success === false){
                state.status = 'warning'
                state.message = payload?.errors[0]?.errorMsg.split('_').join(' ')
            }
        },
        [deployFileFetch.rejected]: (state)=> {
            state.status = 'error'
        }
    },
})

export default deployFile.reducer