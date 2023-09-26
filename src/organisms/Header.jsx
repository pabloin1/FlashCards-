// src/components/organisms/Header.js

import React from 'react';
import Navigation from '../molecules/Navigation';
import '../css/styles.css'



function Header () {
  return (
    <header className='header'>
      <Navigation />
    </header>
  );
}

export default Header;
