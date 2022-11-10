import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const DisplayBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul className="display-book">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </ul>
  );
};

export default DisplayBooks;
