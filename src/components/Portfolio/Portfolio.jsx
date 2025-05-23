// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/image1.png'
import IMG2 from '../../assets/image2.jpg'
import IMG3 from '../../assets/image3.jpeg'
import IMG4 from '../../assets/image4.jpg'
import IMG5 from '../../assets/image5.jpg'
import IMG6 from '../../assets/image6.png'

const data= [
  {
    id: 1,
    image: IMG1,
    title: 'Wheel of Fortune Game',
    github: 'https://github.com/lilym036/wheel-of-fortune',
    demo: 'https://drive.google.com/file/d/1D2MKNRlwfdZKZbwMOlfpeXlDInl1keWp/view'
  
  },
  {
    id: 2,
    image: IMG2,
    title: 'Streamly',
    github: 'https://github.com/lilym036/entertainment-finder',
    demo: 'https://lilym036.github.io/entertainment-finder/'
  
  },
  {
    id: 3,
    image: IMG3,
    title: 'Battleship Game',
    github: 'https://github.com/lilym036/Battleship',
    demo: 'https://drive.google.com/file/d/1eUFBwLAM8PQjXf9sbfVoZNd1o6SS3BHv/view'
  
  },
  {
    id: 4,
    image: IMG4,
    title: 'Employee Tracker',
    github: 'https://github.com/lilym036/employee_tracker',
    demo: 'https://drive.google.com/file/d/10tM9NZmGm-_hg0cqQ9kr7ZCoaDK_mZFS/view'
  
  },
  {
    id: 5,
    image: IMG5,
    title: 'README Generator',
    github: 'https://github.com/lilym036/README-generator',
    demo: 'https://drive.google.com/file/d/18fa0vCSbyXQggGjM8ZczqHRbAWlkniBs/view'
  
  },
  {
    id: 6,
    image: IMG6,
    title: 'SVG Logo Maker',
    github: 'https://github.com/lilym036/logo-maker',
    demo: 'https://drive.google.com/file/d/1Dcp6m1oxKhnPmOeHlpBBQXoM0tZayLeW/view'
  
  },
  
  ]



const Portfolio = () => {
  return (
    <section id= 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <article key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src= {image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
            <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio