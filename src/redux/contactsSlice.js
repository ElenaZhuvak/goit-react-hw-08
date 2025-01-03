import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { fetchContacts, deleteContact, addContact } from "./contacts0ps"

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
    isError: false,
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
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload)
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        })


        .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state, action) => {
            state.isError = false
            state.isLoading = true
        })
        .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
            state.isError = false
            state.isLoading = false
        })
        .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), (state, action) => {
            state.isLoading = false
        })
    } 
})

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items
export const selectIsError = state => state.contacts.isError
export const selectIsLoading = state => state.contacts.isLoading
