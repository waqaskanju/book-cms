import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
// import Books from './routes/Books';
import Categories from './routes/Categories';
import Navigation from './components/Navigation';
import store from './redux/configureStore';
import ListBooks from './components/ListBooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<ListBooks />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
