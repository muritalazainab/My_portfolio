import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div>
     <div className="home" id='home'>
      <div className="text-container">
        <h1>Welcome to my website!</h1>
        <p>This is a brief introduction to my website.</p>
        
      </div>
      <div className="image-container">
        <img src="image.jpg" alt="Home Image" />
      </div>
    </div>

      
    </div>
  )
}

export default Home
