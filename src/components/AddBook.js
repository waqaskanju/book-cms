/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooksAsync } from '../api-service';

// Creating hooks for title and author.
const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Create dispatcher
  const dispatch = useDispatch();

  // Handle form int to add it to book array
  const handleSubmit = (e) => {
    e.preventDefault();
    const item_id = Math.random();
    const category = 'Crime';
    const author = 'A.K Khan';
    dispatch(addBooksAsync({
      item_id, title, author, category,
    }));
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
          id="author"
          className="input author-input"
          placeholder="Book author"
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
