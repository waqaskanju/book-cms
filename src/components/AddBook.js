import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

// Creating hooks for title and author.
const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Create dispatcher
  const dispatch = useDispatch();

  // Handle form int to add it to book array
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random();
    dispatch(addBook(id, title, author));
    setTitle((e.target.title.value = ''));
    setAuthor((e.target.author.value = ''));
  };

  // Form for adding new book.
  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          name="title"
          className="input title-input"
          placeholder="Book title"
          required="required"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="author"
          className="input author-input"
          placeholder="Book author"
          required="required"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select className="input category-input">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="primary-button-big" type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default AddNewBook;
