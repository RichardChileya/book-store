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
      {/* Progress Bar */}
      <div className="progress-bar">
        <Progress type="circle" percent={75} strokeColor="#0290ff" width={50} />
        <div className="progress">
          <span id="percent">75%</span>
          <span id="completed">Completed</span>
        </div>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </div>
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
