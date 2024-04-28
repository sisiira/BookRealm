import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Header.css';
import About from '../../Pages/About/About';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>BookRealm</h2><br />
          <p className='header-text fs-18 fw-3'>
Welcome to BookRealm, your premier destination for book lovers. Immerse yourself in a universe where narratives unfold and journeys begin. Explore the boundless wonders of literature with us today. Join our community and discover your next great read at BookRealm.</p>
          <Search />
        </div>
      </header>
      <About  />
    </div>
  )
}

export default Header