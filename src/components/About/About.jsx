// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
// import { FaAward } from 'react-icons/fa'
// import { FiUsers } from 'react-icons/fi'
// import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            {/* <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>
          <article className='about_card'>
            <FiUsers className='about_icon' />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className='about_card'>
            <VscFolderLibrary className='about_icon' />
            <h5>Projects</h5>
            <small>80+ completed</small>
          </article> */}
          </div>
          <p>
            Aspiring Full Stack Web Developer with a background in Psychology and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for attention to detail, collaboration, strong communication and for being conscientious and determined. Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.
          </p>
          <p>
            I have experience in both frontend and backend technologies. I am currently working on enhancing my fullstack skillset. Please contact me if you have any questions or would like to know more about my projects.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About