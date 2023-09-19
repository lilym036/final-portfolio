// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>jQuery</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>

          </div>
          {/* end of frontend */}
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Sequelize</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>GraphQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience