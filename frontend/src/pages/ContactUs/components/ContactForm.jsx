import React, { useState } from 'react';
import { CircleCheckBig } from 'lucide-react';
import emailjs from '@emailjs/browser'
import '../ContactUs.css'

const ContactForm = () => {
  // react states for required field inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  // react state for confirmation of message sent
  const [show, setShow] = React.useState(true);

  // To set focus on each input field and return error when field is not properly filled
  const [ focused, setFocused ] = React.useState({});

  const handleBlur = (e) => {
    setFocused(prev => ({...prev, [e.target.name]: true}))
  }

  // For focusing the input field for correct information
  const isFocused = (name) => {
    return focused[name] === true
  }

  // the handle submit function combined with EmailJs
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = '';
    const templateId = '';
    const publicKey = '';

    // To create an object that contains template parameter
    const templateParams = {
      from_name: name,
      from_email: email,
      from_subject: subject,
      to_name: 'Lucy',
      message: message,
    }

    // sends email using emailjs, passing params 
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })

      // Displays confirmation once form is submitted
      setShow(false);
  }

  return (
    <>
      {show ? (
        <form className='form'>
          <div className='textbox name'>
            <input
              name='from_name'
              value={name}
              type='text'
              placeholder='Your Name'
              pattern='^[A-Za-z]{2,16}$'
              onBlur={handleBlur}
              onChange={(e) => setName(e.target.value)}
              data-focused={isFocused('from_name').toString()}
              required
            />
            <span>Please fill in this field</span>
          </div>
          <div className='textbox email'>
            <input
              name='from_email'
              value={email}
              type='email'
              placeholder='Your Email'
              onBlur={handleBlur}
              onChange={(e) => setEmail(e.target.value)}
              data-focused={isFocused('from_email').toString()}
              required
            />
            <span>Please fill in this field</span>
          </div>
          <div className='textbox subject'>
            <select
              name='from_subject'
              value={subject}
              type='text'
              pattern='^[A-Za-z]{2,16}$'
              placeholder='What is your enquiry about?'
              onBlur={handleBlur}
              onChange={(e) => setSubject(e.target.value)}
              data-focused={isFocused('from_subject').toString()}
              required
            >
              <option value=''>What is your message about?</option>
              <option value='General'>General</option>
              <option value='Review'>Review</option>
              <option value='Business'>Business</option>
              <option value='Other'>Other</option>
            </select>
            <span>Please select an appropiate subject</span>
          </div>
          <div className='textbox message'>
            <textarea
              name='message'
              value={message}
              type='text'
              cols="30"
              rows="15"
              minLength={100}
              maxLength={300}
              placeholder='What is your message to us about? Any specifics, please add here.'
              onBlur={handleBlur}
              onChange={(e) => setMessage(e.target.value)}
              data-focused={isFocused('message').toString()}
              required
            />
            <span>Message needs to be at least 100 characters long</span>
          </div>
          <div >
            <button 
              disabled={!name | !email | !subject | !message }
              className='message-submit-btn'
              type='button'
              onClick={(e) => handleSubmit(e)}
            >
              SUBMIT MESSAGE
            </button>
          </div>
        </form>
        ) : (
        <div className='sent-confirm'>
          <CircleCheckBig 
            style={{color: 'var(--btn-green)'}}
            strokeWidth={0.4} 
            size={400}/>
          <p className='sent-confirm-text'>Message Sent!</p>
        </div>
      )}
    </>
  );
}

export default ContactForm