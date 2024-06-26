import React from 'react';
import { useGlobalContext } from '../../context';
import Book from '../BookList/Book';
import  Loading  from '../Loader/Loader';
import coverImg from '../../images/missing.png';
import './BookList.css'
import { Link } from 'react-router-dom';



const BookList = () => {
  const {loading, books, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
  return {
    ...singleBook,  
    id: (singleBook.id).replace('/works/', ''),
    cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg,
  }
});

  if(loading){
    return <Loading />
  }

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <Link to="/" className='home-button fs-12 fw-7'>Home</Link>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return (
              <Book key={index} {...item} />  
            )
           })}
        </div>
      </div>
    </section>
  )
}

export default BookList