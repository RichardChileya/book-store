import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/book';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  return (
    <li className="books-list">
      <div className="left-block">
        <p className="category">{book.category}</p>
        <div id="booklist-display">
          <h2>{book.title}</h2>
          <p className="author">{book.author}</p>
        </div>
        <div className="buttons-div">
          <button type="button" className="buttons">Comment</button>
          <hr />
          <button type="button" className="buttons" onClick={() => dispatch(remove(book.item_id))}>Remove</button>
          <hr />
          <button type="button" className="buttons">Edit</button>
        </div>
      </div>
      <p className="progress-bar">
        <Progress type="circle" percent={85} strokeColor="#307bbe" strokelinecap="round" width={60} fill-opacity="1" />
        <span>Completed</span>
      </p>
      <hr className="dividor" />
      <div className="right-block">
        <h3 className="chapter">Current Chapter</h3>
        <p className="chapter-info">Chapter 1 </p>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>

    </li>

  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
