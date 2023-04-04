import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books((book) => book.id !== action.payload.id),
    }),
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
