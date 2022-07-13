const ADDBOOK = 'ADDBOOK'; // Define a constant for addBook action types
const REMOVEBOOK = 'REMOVEBOOK'; // Define a constant for removeBook action types

// Add book Reducer
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action Creater to Add book

export const addBook = (id, title, author) => ({
  type: ADDBOOK,
  id,
  title,
  author,
});

// Action Creater to Remove book
export const removeBook = (id) => ({
  type: REMOVEBOOK,
  id,
});

// const store = Redux.createStore(bookReducer);
export default bookReducer;
