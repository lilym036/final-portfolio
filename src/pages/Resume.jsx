import finalResume from '../assets/resume.pdf'

export default function Resume() {
    return (
      <div>
        <h3>Resume</h3>
        <h4>Download my <a href={finalResume}> Resume</a></h4>
        <h5>Front-end Proficiencies</h5>
        <ul className="resList">
         <li>HTML</li>
         <li>CSS</li>
         <li>JavaScript</li>
         <li>jQuery</li>
         <li>responsive design</li>
         <li>React</li>
         <li>Bootstrap</li>
        </ul>
        <br/>
        <h5>Back-end Proficiencies</h5>
        <ul className="resList">
         <li>APIs</li>
         <li>Node</li>
         <li>Express</li>
         <li>MySQL, Sequelize</li>
         <li>MongoDB, Mongoose</li>
         <li>REST</li>
         <li>GraphQL</li>
        </ul>
      </div>
    );
  }
  