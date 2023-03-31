const Form = () => (
  <div className="addbooks">
    <h2>ADD NEW BOOK</h2>

    <form>
      <input
        type="text"
        className="addbooks"
        placeholder="Book Title"
        required
      />
      <input type="text" className="addbooks" placeholder="Author" required />
      <button type="submit"> Add Books </button>
    </form>
  </div>
);

export default Form;
