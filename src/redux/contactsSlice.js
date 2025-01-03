import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts, deleteContact } from "./contacts0ps"

const initialState = {
            items: [
                {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
            ],
    }
    
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    isLoading: false,
    error: null,
    reducers: {
        addContact: (state, {payload}) => {
            state.items.push(payload)
        },
        deleteContact: (state, {payload}) => {
            state.items = state.items.filter(item => item.id !== payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload
        })
        .addCase(fetchContacts.pending, (state, action) => {
            state.isLoading = true
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        })
        
    } 
})

export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items
