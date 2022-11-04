import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';

const DisplayBooks = (props) => {
  const { books, delBook } = props;

  return (
    <ul>
      {books.map((book) => (
        <Book book={book} delBooks={delBook} key={book.id} />
      ))}
    </ul>
  );
};

DisplayBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default DisplayBooks;
