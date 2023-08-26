import { useState } from 'react';


// Imported a helper function that will check if the email is valid
import {validateEmail } from '../utils/helpers';

export default function Contact() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [errorMessage, setErrorMessage] = useState('');

        const handleInputChange = (e) => {
          const { target } = e;
          const inputType = target.name;
          const inputValue = target.value;
          if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
          } else {
            setMessage(inputValue);
          }
        };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!validateEmail(email) || !name) {
        setErrorMessage('Name or email is invalid');
        return;
      }
      if (!message) {
        setErrorMessage(
          `Please include a message`
        );
        return;
      }

    setName('');
    setEmail('');
    setMessage('');
};

return (
<div>
  <h2 className="formTitle">Contact</h2>
<div className="container text-center">
  <br/>
<br/>
<br/><form className="form" onSubmit={handleFormSubmit}>
  <div className="form-group">
    <label>Name: 
    <input value={name} name="name" type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={handleInputChange} /> </label>
  </div>
  <br/>
  <div className="form-group">
    <label>Email: 
    <input value={email} name= "email" type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" onChange={handleInputChange} /></label>
  </div>
  <br/>
  <div className="form-group">
    <label>Provide a message: 
    <textarea value={message} name="message" type= "message" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputChange}></textarea></label>
  </div>
  <br/>
  <button type="submit">Submit</button>
</form>
{errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
</div>
</div>
);

}

  