import React from 'react'
// import aboutImage from '../assets/about.jpg' // import the about image
import './about.css' // import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src='https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp' alt="About Image" />
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <h6>Front-end Developer <br/>based in India 📍</h6>
        <p>
        My name is Chandra Shekhar, and I'm a Frontend Developer. My passion is to create a clean and user-friendly UI/UX.
        </p>
        <p>
        My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
        </p>
      </div>
    </div>
  )
}

export default About