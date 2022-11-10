import { createAsyncThunk } from '@reduxjs/toolkit';
import apiKey from '../../BookStoreApi';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH = 'bookstore/books/FETCH';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH: return [...action.payload];
    case ADD: return [...state, action.payload];
    case REMOVE: return state.filter((f) => f.item_id !== action.payload);
    default: return state;
  }
};

export const fetchBooks = createAsyncThunk('fetchbooks/get', async (_, thunkApi) => {
  try {
    const res = await apiKey.getAll();

    if (res.data) {
      thunkApi.dispatch({
        type: FETCH,
        payload: Object.entries(res.data).map(([k, v]) => ({ item_id: k, ...v[0] })),
      });
    }
  } catch (err) {
    Promise.reject(err);
  }
});

export const add = (payload) => async (dispatch) => {
  try {
    const res = await apiKey.update(payload);

    dispatch({ type: ADD, payload });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const remove = (payload) => async (dispatch) => {
  try {
    const res = await apiKey.remove(payload);

    dispatch({ type: REMOVE, payload });
    return Promise.resolve(res.date);
  } catch (err) {
    return Promise.reject(err);
  }
};
