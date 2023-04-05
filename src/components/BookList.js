import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const { books } = useSelector((store) => store.book);
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
