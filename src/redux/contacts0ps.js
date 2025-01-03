import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://677816fe80a79bf91903e34a.mockapi.io'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    try {
        const response = await axios.get('/contacts');
        return response.data
    } catch (error) {
        console.log(error.message)
    }
})