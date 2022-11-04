import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Add = (props) => {
  const [inputBook, SetInput] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    SetInput({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { handleBooks } = props;
    if (inputBook.title.trim() && inputBook.author()) {
      handleBooks(inputBook.title, inputBook.author);
    }
  };

  return (
    <div>
      <h1>Add Books</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Author"
          value={inputBook.author}
          name="author"
          onChange={onChange}
        />
      </form>
    </div>
  );
};

Add.propTypes = {
  handleBooks: PropTypes.func.isRequired,
};

export default Add;
