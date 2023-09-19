// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Contact.css'
import { MdOutlineMail } from 'react-icons/md'
// import { AiOutlineLinkedin } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bj463kh', 'template_f5032it', form.current, 'Myk0nPd8rBliWeIpw');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>mejialily036@gmail.com</h5>
            <a href='mailto:mejialily036@gmail.com' target='_blank' rel="noreferrer">Send a message</a>

          </article>
          {/* <article className='contact_option'>
          <AiOutlineLinkedin className='contact_option-icon'  />
          <h4>LinkedIn</h4>
          <h5>LinkedIn Link Below</h5>
          <a href='www.linkedin.com/in/lilibeth-neal-19820a283' target= '_blank'>Send a message</a>
        </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' value='Send' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact