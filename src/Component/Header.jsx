import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo Here</div>
      <nav>
        <ul>
          <li><a href="#home"></a>Home</li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className='hire-me'>Resume</button>

    </header>

  )
}

export default Header
