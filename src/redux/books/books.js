const ADD_BOOK = 'bookstore/books/ADD_BOOK'; // Define a constant for addBook action types
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK'; // Define a constant for removeBook action types

// default values for books.
const books = [
  {
    id: 1,
    title: 'First book',
    author: 'Authoer 1',
  },
  {
    id: 2,
    title: '2nd book',
    author: 'author 2',
  },
  {
    id: 3,
    title: '3rd book',
    author: 'author 3',
  },
];

// Add book Reducer
const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action Creater to Add book

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

// Action Creater to Remove book
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// const store = Redux.createStore(bookReducer);
export default bookReducer;
