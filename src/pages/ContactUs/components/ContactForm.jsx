import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import '../ContactUs.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = '';
    const templateId = '';
    const publicKey = ''

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
      <div className='form'>
        <input 
          name='from_name'
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete='first-name'
          className='box input-box name-box'
        />
        <input 
          name='from_email'
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='off'
          className='box input-box email-box'
        />
        <textarea
          name='message'
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className='box message-box'
        >
        </textarea>
      </div>
      <button 
        disabled={!name || !email || !message}
        onClick={handleSubmit}
        type="submit"
        className='send-btn'
        >
          <span>Send Message</span>
      </button>
    </form>
  );
}

export default ContactForm