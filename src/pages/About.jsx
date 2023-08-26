// eslint-disable-next-line no-unused-vars
import React from 'react'
import Img1 from "../images/about.jpg"

export default function About() {
  return (
    <div>
      <div className="container-fluid bg-1 text-center">
      <img src={Img1} className="img-responsive img-circle" alt="Picture of Me" height="250"/>
      <br/>
      </div>
      <div className="container-fluid bg-2 text-center">
        <h1>About Me</h1>
        <p className="paragraph">
          My name is Lilibeth Neal and I am an aspiring web developer. I am so fortunate to have been able to find and be a part of a full-stack coding program that has helped me be well prepared and ready for a career in web deveopment. I currently reside in Texas but am orignially from California. I attended the University of
          California, Irvine (UCI), where I received my undergraduate degree in Psychology and Social
          Behavior. I then attended Texas State University, where I obtained my masters degreee in school
          psychology. I have been a school psychologist for the past 4 years. However, I am beyond excited and ready to pursue
          a career in web development. </p>
      </div>
    </div>
  );
}