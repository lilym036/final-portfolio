// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME1 from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
    <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Lilibeth Neal</h1>
      <h5 className='text-light'>Fullstack Web Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='me'>
        {/* add image here */}
        <img src={ME1} alt='me' />
      </div>

      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default Header