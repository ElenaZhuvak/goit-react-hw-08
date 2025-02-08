import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const connectionsApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
})

const setAuthHeader = token => {
    connectionsApi.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearAuthHeader = () => {
    connectionsApi.defaults.headers.common.Authorization = ``
}


export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const response = await connectionsApi.post('/users/signup', credentials);
        setAuthHeader(response.data.token)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await connectionsApi.post('/users/login', credentials);
        setAuthHeader(response.data.token)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await connectionsApi.post('/users/logout');
      clearAuthHeader()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token
    if (!savedToken) {
        return thunkAPI.rejectWithValue('Token is not exist!')
    }

    try {
        setAuthHeader(savedToken)
        const response = await connectionsApi.get('/users/current')
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})