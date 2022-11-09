import { v4 as uuidv4 } from 'uuid';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  { id: uuidv4(), title: 'Book 1', author: 'React' },
  { id: uuidv4(), title: 'Book 2', author: 'Redux' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: return [...state, action.payload];
    case REMOVE: return state.filter((f) => f.id !== action.payload);
    default: return state;
  }
};

export const add = (payload) => ({ type: ADD, payload });
export const remove = (payload) => ({ type: REMOVE, payload });
