import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/book';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  return (
    <li className="books-list">
      <div id="booklist-display">
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
      </div>
      <button type="button" onClick={() => dispatch(remove(book.id))}>Delete</button>
    </li>

  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
