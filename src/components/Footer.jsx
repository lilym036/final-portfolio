// import React from 'react'
// imports from FontAwesome for footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import{faLinkedin} from '@fortawesome/free-brands-svg-icons'
import{faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
<footer className="footer container-fluid">
<a href="https://github.com/lilym036">
<FontAwesomeIcon icon= {faGithub} size= "lg" className="footerImg"></FontAwesomeIcon>
</a>
<a href="https://www.linkedin.com/in/lilibeth-neal-19820a283">
<FontAwesomeIcon icon= {faLinkedin}  size= "lg" className="footerImg" ></FontAwesomeIcon></a>
<a href="https://twitter.com/?lang=en">
<FontAwesomeIcon icon= {faTwitter}  size= "lg" className="footerImg" ></FontAwesomeIcon></a>
</footer>

  );
}

export default Footer;