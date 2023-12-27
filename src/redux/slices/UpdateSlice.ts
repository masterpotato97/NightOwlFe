import { createSlice } from '@reduxjs/toolkit'

const upSlice = createSlice({
    name: "update",
    initialState: {
        updateAuthorName:"Update Author Name",
        updateBookTitle: "update Book Title",
        updateBookLength: "Update Book Length",
        updateisbn: "Update ISBN"
    },
    reducers: {
        updateAuthorName:(state, action) => { state.updateAuthorName = action.payload},
        updateBookTitle: (state, action) => { state.updateBookTitle = action.payload},
        updateBookLength: (state, action) => { state.updateBookLength = action.payload},
        updateIsbn: (state, action) => { state.updateisbn = action.payload}
       
    }
})


export const reducer = upSlice.reducer;
export const {updateAuthorName, updateBookTitle, updateBookLength, updateIsbn} = upSlice.actions