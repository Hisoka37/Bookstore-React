import BookList from './BookList';
import Form from './Form';

const Books = () => (
  <>
    <div className="container">
      <div className="store-container">
        <BookList />
      </div>
      <div className="Line" />
      <div className="form-container">
        <h2 className="form_title">ADD NEW BOOK</h2>
        <Form />
      </div>
    </div>
  </>
);

export default Books;
