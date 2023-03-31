import PropTypes from 'prop-types';

const BookList = ({ title, author }) => (
  <div>
    <h1> Books List </h1>
    <ul>
      <li>
        {title}
        {' '}
        by
        {' '}
        {author}
      </li>
    </ul>
  </div>
);
BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookList;
