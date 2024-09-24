import React from 'react'
import './skills.scss'
import { TbBrandReactNative } from 'react-icons/tb'
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io'
import { SiAdobephotoshop, SiAdobexd, SiCss3, SiMysql } from 'react-icons/si'
import { FaGitSquare, FaHtml5 } from 'react-icons/fa'
import { SiRubyonrails } from "react-icons/si";
import { CgFigma } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'
import { BsWordpress } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skill' className="skills container section">

      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      {/* skills container */}
      <div className="skillsContainer grid">
        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">
              2 Years Experience
            </span>
          </div>

          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon"/>
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className="icon"/>
              </div>
              <span className="skillName">JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className="icon"/>
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className="icon"/>
              </div>
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className="icon"/>
              </div>
              <span className="skillName">HTML</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiRubyonrails className="icon"/>
              </div>
              <span className="skillName">Rails</span>
            </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
            <span className="subTitle">
              2 Years Experience
            </span>
          </div>

          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <CgFigma className="icon"/>
              </div>
              <span className="skillName">Figma</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobexd className="icon"/>
              </div>
              <span className="skillName">XD</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobephotoshop className="icon"/>
              </div>
              <span className="skillName">Photoshop</span>
            </div>
          </div>
        </div>

        {/* single Group of skills */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">
              2 Years Experience
            </span>
          </div>

          <div className="generalSkills">
            {/* Single skill div */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className="icon"/>
              </div>
              <span className="skillName">Git</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className="icon"/>
              </div>
              <span className="skillName">Github</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <BsWordpress className="icon"/>
              </div>
              <span className="skillName">Wordpress</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMysql className="icon"/>
              </div>
              <span className="skillName">MySQL</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills
