import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import './Header.css';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Find your book of choice</h2><br />
          <p className='header-text fs-18 fw-3'>Welcome to Mangow, your ultimate destination for manga enthusiasts. Dive into a world where stories never end and adventures await. Join us in exploring the wonders of manga today.</p>
          <Search />
        </div>
      </header>
    </div>
  )
}

export default Header