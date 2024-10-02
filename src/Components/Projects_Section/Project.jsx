import React from 'react'
import './projects.scss'
import { AiFillYoutube } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

// Images ====================================>
import img from '../../Assets/Space-Travelers-Hub.PNG'
//import img1 from '../../Assets/Space-Travelers-Hub.PNG'
//import img2 from '../../Assets/Space-Travelers-Hub.PNG'
// should import all images like above


const data = [
  {
    id: 1,
    image: img,
    demo: '',
    liveLink: 'https://github.com/Zohra-Neda/Real-Estate-API',
    github: '',
    title: 'hhhh',
    desc: 'The Real Estate website will showcase apartments, properties, their prices, and locations across different countries. Users will be able to filter apartments based on countries, prices, and property types.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'JavaScript',
    tech4: 'SCSS',
  },

  {
    id: 2,
    image: img,
    demo: '',
    liveLink: 'https://github.com/Zohra-Neda/Real-Estate-API',
    github: '',
    title: 'hhhh',
    desc: 'The Real Estate website will showcase apartments, properties, their prices, and locations across different countries. Users will be able to filter apartments based on countries, prices, and property types.',
    tech1: '',
    tech2: '',
    tech3: '',
    tech4: '',
  },

]

const Project = () => {
  return (
    <section id='projects' className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {
          data.map(({
            id, github, image, liveLink, desc, demo, title, tech1, tech2,
            tech3, tech4 }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={demo} target="_blank">
                      <AiFillYoutube className="icon"/>
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank">
                      <FiGithub className="icon"/>
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">
                  {desc}
                </div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
              )
            })
        }
      </div>

    </section>
  )
}

export default Project
