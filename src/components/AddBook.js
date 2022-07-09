export default function AddBook() {
  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form">
        <input
          className="input title-input"
          placeholder="Book title"
          required=""
          value=""
        />
        <select className="input category-input">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select
              >
        <button className="primary-button-big" type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
}
