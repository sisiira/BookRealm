import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loader/Loader';
import coverImg from '../../images/missing.png';
import './BookDetail.css'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const URL = 'https://openlibrary.org/works/';

const BookDetail = () => {
const {id} = useParams();
const [loading, setLoading] = React.useState(false);
const [book, setBook] = React.useState(null);
const navigate = useNavigate();

 useEffect(() => {
  setLoading(true);
  async function getBookDetail(){
    try{
     const response = await fetch(`${URL}${id}.json`);
     const data = await response.json();

      if(data){
        const {description, title, covers, subject_places, subject_times, subjects} = data;
        const newBook = {
          description: description ? description.value : 'No description available',
          title: title,
          cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
          subject_places: subject_places ? subject_places.join(", ") : 'No place available',
          subject_times: subject_times ? subject_times.join(", ") : 'No time available',
          subjects: subjects ? subjects.join(", ") : 'No subject available'
        };
        setBook(newBook);
      } else {
        setBook(null);
      }
      setLoading(false);
    } catch(error){
      console.log(error);
      setLoading(false);
    }
  } 
  getBookDetail();
 }, [id]);

  if(loading) return <Loading />

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate('/book')}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Return</span>
        </button>
        
        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book?.cover_img} alt='cover img' />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-7 fs-13'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetail