import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postBookToApi } from '../redux/books/booksSlice';

const Form = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(postBookToApi(book));
    setInput(input);
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
          onChange={handleChange}
          value={input.title}
          required
        />
        <input
          type="text"
          className="addbooks"
          placeholder="Author"
          name="author"
          id="author"
          onChange={handleChange}
          value={input.author}
          required
        />
        <button type="submit" onClick={handleSubmit}> Add Books </button>
      </form>
    </div>
  );
};

export default Form;
