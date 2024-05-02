import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div>
     
     <div><h1>Services</h1></div>
    <div className="services">
     
     
        <div className="service1">
          <h2>Web Development</h2>
          <p>Building fast, secure, and scalable web applications using modern technologies like HTML, CSS, JavaScript, and React.</p>
          <ul>
            <li>Front-end development</li>
            <li>Back-end development</li>
            <li>Full-stack development</li>
          </ul>
        </div>
        <div className="service2">
          <h2>Responsive Design</h2>
          <p>Crafting responsive and mobile-friendly interfaces that adapt to different screen sizes and devices.</p>
          <ul>
            <li>Mobile-first design</li>
            <li>Responsive layouts</li>
            <li>Cross-browser compatibility</li>
          </ul>
        </div>
       
      </div>
    </div>
  
    
  )
}

export default Services
