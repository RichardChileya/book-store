import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DisplayBooks from './DisplayBooks';
import Add from './AddBooks';

const Books = () => {
  const [books, setBooks] = useState([]);

  const handleBooks = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  const delBooks = (title) => {
    setBooks([...books.filter((book) => book.title !== title)]);
  };

  return (
    <div>
      <DisplayBooks books={books} delBooks={delBooks} />
      <Add handleBooks={handleBooks} />
    </div>
  );
};

export default Books;
