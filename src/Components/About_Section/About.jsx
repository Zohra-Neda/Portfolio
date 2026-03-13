import React from 'react'
import './about.scss'
import { TbCloudDownload } from 'react-icons/tb'
import img  from "../../Assets/zohra_neda.jpg";

const About = () => {
  return (
    <section id='about' className="about section container">
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm a skilled software developer with experience in JavaScript and Ruby,
            and expertise in frameworks like React, Rails and Redux library.
            I'm a quick learner and collaborate closely with clients to create efficient,
            scalable, and user-friendly solutions that solve real-world problems.
            Let's work together to bring your ideas to life!
          </h4>
          
          <div className="aboutBtn">
            <a href="Zohra_Neda_Resume.pdf" download="Zohra_Neda_Resume.pdf" className="flex">
              Download CV <TbCloudDownload className="icon" />
            </a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Zohra Neda" className="aboutImg" />
        </div>
      </div>
    </section>
  )
}

export default About
