import React, { useState, useRef } from 'react';
import './contacts.style.scss';

import emailjs from 'emailjs-com';

import Input from '../input/input';

function Contacts() {
  
  const [user, setUser] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  });

  const [done, setDone] = useState(false);

  const formRef = useRef();

  const inputs = [
    {
      id: 1,
      name: 'username',
      placeholder: 'User Name',
      type: 'text',
      label: 'Enter Your Name',
      errorMessage: "*user name should be 3-6 characters and shouldn't include any special characters!",
      pattern: "^[a-zA-Z].*[\s\.]*$",
      required: true
    },
    {
      id: 2,
      name: 'email',
      placeholder: 'User Email',
      type: 'email',
      label: 'Enter Your Email',
      errorMessage: '*It should be a valid email!',
      required: true
    },
    {
      id: 3,
      name: 'birthday',
      placeholder: 'Enter Your Birthday',
      type: 'date',
      label: 'Enter Your Birthday',
      errorMessage: ''
    },
    {
      id: 4,
      name: 'password',
      placeholder: 'User Password',
      type: 'text',
      label: 'Enter Your Password',
      errorMessage: "*Password should be 8-20 characters, and include capital and small letter, number, special character",
      pattern:  `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      placeholder: 'Confirm Your Password',
      type: 'password',
      label: 'Confirm Your Password',
      errorMessage: "*Passwords don't match",
      pattern: user.password,
      required: true
    }
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    emailjs.sendForm('service_09was7w', 'template_v8rlcdm', formRef.current, 'v6vvmZdsSS4vtAXsD')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  return (
    <div className="contacts">
      <h1 className="contacts__title">Register</h1>
      <form className="contacts__form" onSubmit={handleSubmit} ref={formRef} >
         {
           inputs.map((input) => 
            <Input 
              key={input.id} 
              value={user[input.name]}
              handleChange={handleChange}
              {...input}
              required={input.required}
              pattern={input.pattern}
              />
           )
         }
          <textarea name="message"  cols="30" rows="10"></textarea>
         <button className="btn contacts__btn">Submit</button>
         {done && <p>Thanks Alot!</p>}
      </form>
    </div>
  );
}

export default Contacts;
