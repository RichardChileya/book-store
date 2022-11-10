import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DisplayBooks from './DisplayBooks';
import Add from './AddBooks';
import { fetchBooks } from '../redux/books/book';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div>
      <DisplayBooks />
      <Add />
    </div>
  );
};

export default Books;
