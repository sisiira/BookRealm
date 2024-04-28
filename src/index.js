import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import About from './Pages/About/About';
import BookDetail from './components/BookDetail/BookDetail';

const Home = () => (
  <>
    <Header />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="book" element={<BookList />} />
      <Route path="/book/:id" element={<BookDetail />} />
    </Routes>
  </BrowserRouter>
  </AppProvider>
);