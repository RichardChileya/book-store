import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { add } from '../redux/books/book';

const Add = () => {
  const [inputBook, setInputText] = useState({
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();
  const getBook = (title, author, category) => ({
    item_id: uuidv4(), title, author, category,
  });

  const onChange = (e) => {
    setInputText({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputBook.title.trim() && inputBook.author.trim() && inputBook.category) {
      dispatch(add(getBook(inputBook.title, inputBook.author, inputBook.category)));
      setInputText({
        title: '',
        author: '',
        category: '',
      });
    }
  };

  return (
    <div id="form">
      <hr className="form-dividor" />
      <h2 className="form-header">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Book title"
          value={inputBook.title}
          name="title"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="Book author"
          value={inputBook.author}
          name="author"
          onChange={onChange}
        />
        <input
          type="text"
          className="input-text"
          placeholder="category"
          value={inputBook.category}
          name="category"
          onChange={onChange}
        />
        <button className="input-submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Add;
