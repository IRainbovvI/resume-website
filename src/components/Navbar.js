import React from 'react';
//Css
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <Link to='/' className='link'>
          <h4>Home</h4>
        </Link>
        <Link to='/education' className='link'>
          <h4>Education</h4>
        </Link>
        <Link to='/experience' className='link'>
          <h4>Experience</h4>
        </Link>
        <Link to='/skills' className='link'>
          <h4>Skills</h4>
        </Link>
        <Link to='/contact' className='link'>
          <h4>Contact</h4>
        </Link>
      </div>
    </nav>
  );
};
