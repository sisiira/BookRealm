import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutImg from '../../images/about-img.jpg';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <Link to="/" className="home-button fs-12 fw-7"></Link>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-12 ls-1'>About BookRealm</h2>
            <p>BookRealm is a sanctuary for book enthusiasts, a realm where endless tales and mesmerizing journeys unfold. We invite you to step into a world filled with complex characters, intricate plots, and rich prose. Whether you're a lifelong bibliophile or just beginning to explore the pages of literary treasures, BookHaven is your ultimate destination for all things books. We boast a comprehensive collection of titles across diverse genres, ensuring there's a story to capture every reader's heart. Join our thriving community and delve into the wonders of literature today! Let your imagination take flight as you immerse yourself in the profound world of books.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;