import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const text = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <>
      <h2>{text}</h2>
      <button type="button" onClick={() => dispatch(status())}>Check Status</button>
    </>
  );
};

export default Categories;
