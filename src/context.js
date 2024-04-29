import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL_BOOKS = 'https://openlibrary.org/search.json?title=';
const URL_AUTHORS = 'https://openlibrary.org/search/authors.json?q='; 
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('Find your favorite book');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState('');
  const [searchBy, setSearchBy] = useState('title'); 

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const url = searchBy === 'title' ? `${URL_BOOKS}${searchTerm}` : `${URL_AUTHORS}${searchTerm}`; 
      const response = await fetch(url);
      const data = await response.json();

      const { docs = [] } = data; 

      if (docs.length > 0) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle('Your Search Result');
        } else {
          setResultTitle('No books matched your search term');
        }
      } else {
        setBooks([]);
        setResultTitle('No books matched your search term');
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm, searchBy]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, searchBy, fetchBooks]); 

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        searchBy,
        setSearchBy,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
