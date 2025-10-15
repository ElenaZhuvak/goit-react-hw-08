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

export const editContact = createAsyncThunk('contacts/editContact', async ({id, name, number}, thunkAPI) => {
    try {
        const response = await connectionsApi.patch(`/contacts/${id}`, {name, number})
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
