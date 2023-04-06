import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBookFromApi } from '../redux/books/booksSlice';

const BookItem = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <main className="bookcard">
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
        <button type="button" className="booksbtn">
          {' '}
          Edit
        </button>
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
