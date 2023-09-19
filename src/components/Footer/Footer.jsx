// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Lilibeth Neal</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://github.com/lilym036'><FaGithub /></a>
        <a href='www.linkedin.com/in/lilibeth-neal-19820a283'><AiOutlineLinkedin /></a>
      </div>
    </footer>
  )
}

export default Footer