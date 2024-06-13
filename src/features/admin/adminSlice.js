import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
        users: [],
        Ticket: {},
        Tickets: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ""
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload
                state.isSuccess = true
                state.isLoading = false
                state.isError = false
                state.message = ""
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(adminTickets.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ""
            })
            .addCase(adminTickets.fulfilled, (state, action) => {
                state.Tickets = action.payload
                state.isSuccess = true
                state.isLoading = false
                state.isError = false
                state.message = ""
            })
            .addCase(adminTickets.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(adminTicket.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ""
            })
            .addCase(adminTicket.fulfilled, (state, action) => {
                state.Ticket = action.payload
                state.isSuccess = true
                state.isLoading = false
                state.isError = false
                state.message = ""
            })
            .addCase(adminTicket.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export default adminSlice.reducer


export const getAllUsers = createAsyncThunk("ADMIN/USERS", async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.getUsers(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const adminTickets = createAsyncThunk("ADMIN/TICKETS", async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.getTickets(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const adminTicket = createAsyncThunk("FETCH/TICKET", async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await adminService.getTicket(token, id)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

