import React from 'react'
import "./Home.css"
import { FaFacebook ,   FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
     <div className="home" id='home'>
      <div className="text-container">
        <h1>Welcome to my website!</h1>
        <p>This is a brief introduction to my website.</p>
        <div className='icons'>
       <a href=""><FaFacebook/></a> 
        <a href=""><FaLinkedin/></a>
      <a href="">  <FaXTwitter/></a>
      </div>
        
      </div>
     
      <div className="image-container">
        <img src="home-image.JPG" alt="Home Image" />
      </div>
    </div>

      
    </div>
  )
}

export default Home
