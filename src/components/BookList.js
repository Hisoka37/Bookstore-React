import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './BookItem';
import { getBooksFromApi } from '../redux/books/booksSlice';
import LoadingSpinner from './Load';

const BookList = () => {
  const {
    books, loading, success, error,
  } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromApi());
  }, [dispatch, success]);
  if (loading) {
    return <LoadingSpinner />;
  }

  if (books.length === 0) {
    return <h2> No Books available.</h2>;
  }
  if (error) {
    return <h2>404 Error</h2>;
  }

  return (
    <>
      <section className="bookscontainer">
        {books.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;
