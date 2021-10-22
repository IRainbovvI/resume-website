import React, { useEffect, useState } from 'react';
//Css
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';
import { VscColorMode } from 'react-icons/vsc';

const initialValue = [
  {
    '--primary-color': '#082032',
    '--secondary-color-dark': '#2c394b',
    '--secondary-color-light': '#334756',
    '--extra-color': '#ff4c29'
  },
  {
    '--primary-color': '#000000',
    '--secondary-color-dark': '#150050',
    '--secondary-color-light': '#3F0071',
    '--extra-color': '#610094'
  },
  {
    '--primary-color': '#382933',
    '--secondary-color-dark': '#3B5249',
    '--secondary-color-light': '#519872',
    '--extra-color': '#A4B494'
  },
  {
    '--primary-color': '#142850',
    '--secondary-color-dark': '#27496D',
    '--secondary-color-light': '#0C7B93',
    '--extra-color': '#00A8CC'
  },
  {
    '--primary-color': '#200F21',
    '--secondary-color-dark': '#382039',
    '--secondary-color-light': '#5A3D5C',
    '--extra-color': '#F638DC'
  },
  {
    '--primary-color': '#212121',
    '--secondary-color-dark': '#323232',
    '--secondary-color-light': '#0D7377',
    '--extra-color': '#14FFEC'
  },
  {
    '--primary-color': '#EEEEEE',
    '--secondary-color-dark': '#373A40',
    '--secondary-color-light': '#686D76',
    '--extra-color': '#19D3DA'
  }
];

let i = 0;

export const Navbar = () => {
  const [colorThemes] = useState(initialValue);
  const [colorTheme, setColorTheme] = useState(colorThemes[0]);

  useEffect(() => {
    const r = document.querySelector(':root');
    r.style.setProperty('--primary-color', colorTheme['--primary-color']);
    r.style.setProperty(
      '--secondary-color-dark',
      colorTheme['--secondary-color-dark']
    );
    r.style.setProperty(
      '--secondary-color-light',
      colorTheme['--secondary-color-light']
    );
    r.style.setProperty('--extra-color', colorTheme['--extra-color']);
  }, [colorTheme]);

  const changeColorTheme = () => {
    i++;
    if (i >= colorThemes.length) {
      i = 0;
    }

    setColorTheme(colorThemes[i]);
  };

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

        <button className='color-theme' onClick={changeColorTheme}>
          <VscColorMode />
        </button>
      </div>
    </nav>
  );
};
