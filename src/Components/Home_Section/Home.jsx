import React from 'react'
import './home.scss'
import { AiFillGithub } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { IoLogoLinkedin } from "react-icons/io";
import { TbArrowBigRightLines, TbChevronsDown } from 'react-icons/tb'

const Home = () => {
  return (
    <section id='home' className="home section">
      {/* this div will be only visible at wider screen */}
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/Zohra-Neda" target="_blank">
            <AiFillGithub className="icon"/>
          </a>
          <a href='' target="_blank">
            <FiTwitter className="icon"/>
          </a>
          <a href='' target="_blank">
            <IoLogoLinkedin className="icon"/>
          </a>
          <div className="line"></div>
        </div>
      </div>

      {/* homeContent */}
      <div className="container homeContainer">
        <span className="introText">
          Hi my name is,
        </span>
        <h1 className="title">
          Zohra Neda
        </h1>
        <span className="subTitle">
          I develope scalable web based applications and software.
        </span>

        <p className="homeParagraph">
          I code within required coding standards and styles to serve the exact need.
        </p>

        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              Contact Me <TbArrowBigRightLines className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6> <TbChevronsDown className="icon"/>
            </a>
          </div>
        </div>
      </div>

      {/* right div, with email address ( will also be visible at a wider screen only) */}
      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:youremail@gmail.com" target="_blank">
              zohra.neda@gmail.com
            </a>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
