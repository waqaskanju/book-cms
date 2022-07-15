import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewBook from './AddBook';
import SingleBook from './SingleBook';
import { getBooks } from '../api-service';

// Extract data from redux store using selector.
const ListBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="container">
      <ul className="books">
        {books.books.map((book) => (
          <SingleBook
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
          />
        ))}
      </ul>
      <div className="horizontal-divider" />
      <AddNewBook />

    </div>
  );
};

export default ListBooks;
