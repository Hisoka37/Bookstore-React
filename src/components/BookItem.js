import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBookFromApi } from '../redux/books/booksSlice';
import CircelProgress from './progress';

const BookItem = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <main className="bookcard">
      <div className="book-card">
        <div className="bookdata">
          <p>{category}</p>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className="bookfunctions">
          <button type="button" className="booksbtn">
            {' '}
            Comment
          </button>
          <div className="Linetwo" />
          <button
            type="button"
            className="booksbtn"
            onClick={() => {
              dispatch(deleteBookFromApi(id));
            }}
          >
            {' '}
            Remove
          </button>
          <div className="Linetwo" />
          <button type="button" className="booksbtn">
            {' '}
            Edit
          </button>
        </div>
      </div>
      <div className="item-progress">
        <CircelProgress />
        <div className="task-progress">
          <p className="Completed-Task">
            {Math.floor(Math.random() * (99 - 0)) + 0}
            <span>%</span>
          </p>
          <p className="Completed">Completed</p>
        </div>
      </div>
      <div className="level-two" />
      <div className="levels">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 10</p>
        <div>
          <button type="button" className="Update-progress">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </main>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
