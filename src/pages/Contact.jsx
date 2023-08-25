import { useState } from 'react';
// import './style.css';

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
<div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <label>Name: <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Name"
        /></label>
        <label>Email address: <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        /></label>
        <label>Provide a message:<textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Provide message"
        /></label>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>

);

}

  