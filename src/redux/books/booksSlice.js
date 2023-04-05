import { createSlice } from '@reduxjs/toolkit';
import bookArr from './Bookarr';

const initialState = {
  books: bookArr,
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({
      ...state,
      books: [...state.books, payload],
    }),
    removeBook: (state, action) => {
      const itemId = action.payload;
      const updatedBooks = state.books.filter((book) => book.id !== itemId);
      return { ...state, books: updatedBooks };
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
