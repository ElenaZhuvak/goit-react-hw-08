import { createAsyncThunk } from "@reduxjs/toolkit";
import { connectionsApi } from "../auth/operations";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await connectionsApi.get('/contacts');
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const response = await connectionsApi.post('/contacts', body)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const response = await connectionsApi.delete(`/contacts/${id}`)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//     try {
//       await connectionsApi.post('/users/logout');
//       connectionsApi.defaults.headers.common.Authorization = ''; 
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// })

// fetchContacts, addContact, deleteContact