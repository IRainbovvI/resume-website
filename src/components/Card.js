import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export const Card = () => {
  return (
    <div className='cardContainer'>
      <Link to='/' className='cardLink'>
        <div className='cardBody'>
          <h2>Vladyslav Prokopchuk</h2>
          <p>Junior Front-End Developer</p>
        </div>
      </Link>
    </div>
  );
};
