import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit"

import { selectContacts, selectFilter } from "./selectors"
import { addContact, deleteContact, fetchContacts } from "./operations"

const initialState = {
            items: [],
            isLoading: false,
            isError: false,
    }
    
    const contactsSlice = createSlice({
        name: 'contacts',
        initialState,
        extraReducers: (builder) => {
            builder
                .addCase(fetchContacts.fulfilled, (state, {payload}) => {
                    state.items = payload
                })
                .addCase(addContact.fulfilled, (state, {payload}) => {
                    state.items.push(payload)
                })
                .addCase(deleteContact.fulfilled, (state, {payload}) => {
                    state.items = state.items.filter(item => item.id !== payload.id)
                })
                .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state) => {
                    state.isError = false
                    state.isLoading = true
                })
                .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), (state) => {
                    state.isLoading = false
                })
                .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state) => {
                    state.isError = true
                    state.isLoading = false
                })
        } 
    })

// .addCase(logout.fulfilled, () => {initialState})



export const contactsReducer = contactsSlice.reducer;
export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    || contact.number.includes(filter))
})
