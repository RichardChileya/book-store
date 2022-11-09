const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: return [...state, action.payload];
    case REMOVE: return state.filter((f) => f.title !== action.payload);
    default: return state;
  }
};

export const add = (payload) => ({ type: ADD, payload });
export const remove = (payload) => ({ type: REMOVE, payload });
