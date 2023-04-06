import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/s7ztgnsWorrLpLCHKrnu/books/';

const initialState = {
  books: [],
  loading: false,
  error: false,
  success: false,
};

const objectData = (data) => {
  const dataArr = [];
  data.forEach((element) => {
    const newObject = {
      id: element[0],
      title: element[1][0].title,
      author: element[1][0].author,
      category: element[1][0].category,
    };
    dataArr.push(newObject);
  });
  return dataArr;
};

export const getBooksFromApi = createAsyncThunk(
  'books/getBooksFromApi',
  async () => {
    try {
      const dataResponse = await axios(url);
      let data = Object.entries(dataResponse.data);
      data = objectData(data);
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const postBookToApi = createAsyncThunk(
  'books/postBookToApi',
  async ({ id, title, author }) => {
    try {
      const dataResponse = await axios.post(url, {
        item_id: id,
        title,
        author,
        category: 'comedy',
      });
      return dataResponse;
    } catch (err) {
      return err;
    }
  },
);

export const deleteBookFromApi = createAsyncThunk(
  'books/deleteBookFromApi',
  async (id) => {
    try {
      const dataResponse = await axios.delete(url + id);
      return dataResponse;
    } catch (err) {
      return err;
    }
  },
);

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBooksFromApi.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getBooksFromApi.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      books: action.payload,
    }));
    builder.addCase(getBooksFromApi.rejected, (state) => ({
      ...state,
      loading: false,
      error: true,
    }));
    builder.addCase(postBookToApi.pending, (state) => ({
      ...state,
      success: false,
    }));
    builder.addCase(postBookToApi.fulfilled, (state) => ({
      ...state,
      success: true,
    }));
    builder.addCase(postBookToApi.rejected, (state) => ({
      ...state,
      success: false,
    }));
    builder.addCase(deleteBookFromApi.pending, (state) => ({
      ...state,
      success: false,
    }));
    builder.addCase(deleteBookFromApi.fulfilled, (state) => ({
      ...state,
      success: true,
    }));
    builder.addCase(deleteBookFromApi.rejected, (state) => ({
      ...state,
      success: false,
    }));
  },
});

export default BooksSlice.reducer;
