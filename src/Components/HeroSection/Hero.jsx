import React from "react";
import { FaXTwitter, FaLinkedin  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="hero-text">
          <h1>
            Front-End React<br/>Developer
          </h1>
          <img src="./src/assets/waving.png" alt="" />
          <p>
            Hi, I'm Chandra Shekhar Maurya. A passionate Front-end React <br/>
            Developer based in India.
          </p>
          <span>
            <a href=""><FaXTwitter/></a>
            <a href=""><FaLinkedin /></a>
            <a href=""><FaGithub/></a>
          </span>
          </div>
          <div className="hero-img"></div>
      </div>
    </div>
  );
};

export default Hero;
