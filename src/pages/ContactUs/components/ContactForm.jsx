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