import React from 'react'
import "./Project.css"

const Project = () => {
  return (
    <>
   
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="project">
          <h2>Project 1</h2>
          <p>Weather App</p>
        <a href="">  <img src="weather-image.jpeg" alt="Project 1 Image" /></a>
          
        </div>
        <div className="project">
          <h2>Project 2</h2>
          <p>Dictionary</p>
         <a href=""> <img src="dictionary-image.jpeg" alt="Project 2 Image" /></a>
          
        </div>
        {/* <div className="project">
          <h2>Project 3</h2>
          <p>Blogr Landing Page </p>
          <img src="blogr-image.jpg" alt="Project 3 Image" />
        </div> */}
      </div>
    </div>
    </>
  );
}



export default Project
