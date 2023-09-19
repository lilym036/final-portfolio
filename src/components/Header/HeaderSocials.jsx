// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaStackOverflow} from 'react-icons/fa6'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target= '_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com' target= '_blank' rel="noreferrer"><FaGithub/></a>
        <a href='https://stackoverflow.com' target= '_blank' rel="noreferrer"><FaStackOverflow/></a>
    </div>
  )
}

export default HeaderSocials