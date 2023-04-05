import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: v4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="addbooks">
      <h2>ADD NEW BOOK</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="addbooks"
          placeholder="Book Title"
          id="title"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          required
        />
        <input
          type="text"
          className="addbooks"
          placeholder="Author"
          name="author"
          id="author"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
          required
        />
        <button type="submit"> Add Books </button>
      </form>
    </div>
  );
};

export default Form;
