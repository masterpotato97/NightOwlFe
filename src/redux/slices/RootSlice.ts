import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        author_name: "Author Name",
        book_title: "Book Title",
        book_len: "Book length",
        isbn: "isbn",
    },
    reducers: {
        chooseAuthorName: (state, action) => { state.author_name = action.payload},
        chooseBookTitle: (state, action) => { state.book_title = action.payload},
        chooseBookLength: (state, action) => { state.book_len = action.payload},
        chooseIsbn: (state, action) => { state.isbn = action.payload}
        
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAuthorName, chooseBookTitle, chooseBookLength, chooseIsbn} = rootSlice.actions