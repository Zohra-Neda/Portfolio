import React from 'react'
import './about.scss'
import { TbCloudDownload } from 'react-icons/tb'
import img  from "../../Assets/Zohra_Neda.jpg";

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
            I'm a success-driven, determined we developer.
            I have experience using HTML Saas Javascript and PHP
            to build accessible component-based web pages and systems. <br />
            Ability to deliver quality results while collaborating in
            rapidly changing working environments and team compositions.
            <br />
            A passionate person willing to learn more technologies to become
            a better developer than I was yesterday. So determined and result oriented.
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
