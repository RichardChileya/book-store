import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, delBook } = props;

  return (
    <li>
      <div id="booklist-display">
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
      </div>
      <button type="button" onClick={() => delBook(book.title)}>Delete</button>
    </li>

  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default Book;
