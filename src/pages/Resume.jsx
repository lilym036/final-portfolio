import finalResume from '../assets/resume.pdf'
// resume imported from assets
export default function Resume() {
    return (
      <div className="resContainer">
        <h3 className="resTitle">Resume</h3>
        <br/>
        <h5>Download my <a href={finalResume}> Resume</a></h5>
        <br/>
        <h6 className= "resSubTitle">Front-end Proficiencies</h6>
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
        <h6 className= "resSubTitle">Back-end Proficiencies</h6>
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
  