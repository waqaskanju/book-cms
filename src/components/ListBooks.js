import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from './AddBook';
import SingleBook from './SingleBook';

// Extract data from redux store using selector.
const ListBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="container">
      <ul className="books">
        {books.map((book) => (
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
