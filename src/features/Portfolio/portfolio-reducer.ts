import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {projectApi} from "../../common/api/project-api";

const loginTC = createAsyncThunk('portfolio/login',  async ()=> {
    try {
        const res = await projectApi.login()
        return res.data
    } catch (err) {
        console.log(err)
           return {}
    }

    // projectApi.login().then(   (res) => {
    //     return res.data
    // }).catch(err => {
    //     return err
    // })
})

export const slice = createSlice({
    name: 'portfolio',
    initialState: {portfolio: {}},
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginTC.fulfilled, (state, action) => {
            state.portfolio = action.payload
        })
    }
})

export const portfolioReducer = slice.reducer

export const portfolioActions = {
    loginTC,
    ...slice.actions
}