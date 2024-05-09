import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import '../ContactUs.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_huuc1f5';
    const templateId = 'template_c4e69zm';
    const publicKey = 'Qq9N50jYGez_L1Hi6'

    // To create an object that contains template parameter
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Lucy',
      message: message,
    }

    // sends email using emailjs, passing params 
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
  }

  return (
    <form onSubmit={handleSubmit} className='email-form'>
      <input 
        name='from_name'
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete='first-name'
      />
      <input 
        name='from_email'
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='off'
      />
      <textarea
        name='message'
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
      >
      </textarea>
      <button 
        disabled={!name || !email || !message}
        onClick={handleSubmit}
        type="submit"
        >
          <span>Send Email</span>
      </button>
    </form>
  );
}
  

export default ContactForm

/*
 const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }
  
  const handleSendEmail = () =>  {
    sendCustomEmail(details)
  }
 return (
    <div className='main'>
      <div>
        <span>Your Name</span>
        <input 
          name="name"
          value={details.name}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Required.."
          autoComplete='given-name'
        />
      </div>
      <div>
        <span>Your Email</span>
        <input 
          name="email"
          value={details.email}
          onChange={handleDetailsChange}
          type="email"
          placeholder="Required.."
          autoComplete='off'
        />
      </div>
      <div>
        <span>Message</span>
        <input 
          name="message"
          value={details.message}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Required"
          autoComplete='off'
        />
      </div>
      <button 
        disabled={!details.email || !details.email || !details.message}
        onClick={handleSendEmail}
        >
        <span>Send Email</span>
      </button>
    </div>
  );
}

 */