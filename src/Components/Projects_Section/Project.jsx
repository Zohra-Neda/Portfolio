import React from 'react'
import './projects.scss'
import { HiExternalLink } from "react-icons/hi";
import { FiGithub } from 'react-icons/fi'

// Images ====================================>
import img1 from '../../Assets/space-travelers-hub.png'
import img2 from '../../Assets/drive-share.png'
import img3 from '../../Assets/doctor-appointments.png'
// should import all images like above


const data = [
  {
    id: 1,
    image: img1,
    demo: '',
    liveLink: 'https://space-travelers-hub-h0bs.onrender.com',
    github: 'https://github.com/Zohra-Neda/Space-Travelers-Hub',
    title: 'Space-Travelers-Hub',
    desc: 'The Space Traveler Hub is an app built with React and Redux. On the main page, it displays rockets along with their detailed explanations. The mission page allows users to view available missions.',
    tech1: 'HTML',
    tech2: 'CSS',
    tech3: 'React.js',
    tech4: 'Redux.js',
  },

  {
    id: 2,
    image: img2,
    demo: '',
    liveLink: 'https://drive-share-app-frontend.onrender.com/',
    github: 'https://github.com/Zohra-Neda/DriveShare-API',
    title: 'DriveShare',
    desc: 'DriveShare is a full-stack web application designed to streamline the process of managing car rentals. Users can easily add new cars to their inventory, reserve vehicles for future use, and seamlessly delete listings.',
    tech1: 'Rails',
    tech2: 'React',
    tech3: 'Tailwind',
  },

  {
    id: 3,
    image: img3,
    demo: '',
    liveLink: 'https://drive-share-app-frontend.onrender.com/',
    github: 'https://github.com/Zohra-Neda/Doctor-Appointment-Booking-App',
    title: 'Doctor-Appointment-Booking-App',
    desc: 'DriveShare is a full-stack web application designed to streamline the process of managing car rentals. Users can easily add new cars to their inventory, reserve vehicles for future use, and seamlessly delete listings.',
    tech1: 'Rails',
    tech2: 'React',
    tech3: 'Tailwind',
  }

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
                    <a href={demo} target="_blank" rel="noreferrer noopener">
                      <HiExternalLink className="icon"/>
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank" rel="noreferrer noopener">
                      <FiGithub className="icon"/>
                    </a>
                  </div>
                </div>

                <div className="imgDiv">
                  <a href={liveLink} target="_blank" rel="noreferrer noopener">
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
