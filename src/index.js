import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetail from './components/BookDetail/BookDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/books/:bookId" element={<BookDetail />} />
    </Routes>
  </BrowserRouter>
);


