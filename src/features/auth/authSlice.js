import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userExist ? userExist : null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, state => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ""
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = ""
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(userRegister.pending, state => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ""
            })

            .addCase(userRegister.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = ""
                state.user = action.payload
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.user = null
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = ""
            })
    }
});

export default authSlice.reducer

export const loginUser = createAsyncThunk("AUTH/LOGIN", async (formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const userRegister = createAsyncThunk("AUTH/REGISTER", async (formData, thunkAPI) => {
    try {
        return await authService.register(formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const logOut = createAsyncThunk("LOGOUT/USER", async () => {
    localStorage.removeItem("user");
})
