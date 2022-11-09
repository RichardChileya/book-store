import { configureStore } from '@reduxjs/toolkit';
import books from './books/book';
import categories from './categories/categories';

const store = configureStore({
  reducer: {
    books,
    categories,
  },
});

export default store;
