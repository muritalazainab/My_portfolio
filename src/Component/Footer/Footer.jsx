import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
    return (
        <footer className='footer'>
        
        
          <p>{`Copyright &copy; ${currentYear} Designed by Muritala Zainab | All rights reserved.`}</p>
        </footer>
    
      );7
    };
    
    export default Footer; 
 