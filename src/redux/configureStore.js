import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
// import categoryReducer from './categories/categories';

const rootReducer = {
  books: bookReducer.reducer,
  // categories: categoryReducer.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
