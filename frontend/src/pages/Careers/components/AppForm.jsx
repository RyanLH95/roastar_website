import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const AppForm = () => {
  // To set focus on each input field and return error when field is not properly filled
  const [ focused, setFocused ] = React.useState({});

  // For file name
  const [ fileName, setFileName ] = useState('')

  let handleFile = (file) => {
    setFileName(file?.name)
  }

  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
    console.log('upload successful')
  };

  // For params in email.js
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ job, setJob ] = useState('');
  const [ rightToWork, setRightToWork ] = useState('');
  const [ resume, setResume ] = useState('');
  
  const handleBlur = (e) => {
    setFocused(prev => ({...prev, [e.target.name]: true}))
  }

  const isFocused = (name) => {
    return focused[name] === true
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(handleFile)

    reader.onload = async () => {

    const serviceId = '';
    const templateId = '';
    const publicKey = '';

    const templateParams = {
      from_firstname: firstName,
      from_lastname: lastName,
      from_email: email,
      from_phonenumber: phoneNumber,
      job: job,
      right_to_work: rightToWork,
      resume: reader.result,
      to_name: 'Lucy',
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setPhoneNumber('');
        setJob(true);
        setRightToWork(true);
        setResume('');
      })
      .catch((error) => {
        console.error('Error sending email:', error)
      })
    console.log(form)
    }
  }

  return (
    <>
      <div className='app-card'>
        <img 
          src='../../../../logo/Logo ROASTAR-white.PNG'
          width={150}
        />
        <form onSubmit={handleSubmit} className='app-form'>
          <h3>Personal Details</h3>
          <div className='form-content'>
            <div className='first-name'>
              <input
                type='text'
                name='from_firstname'
                value={firstName}
                placeholder='First Name'
                autoComplete='given-name'
                pattern='^[A-Za-z]{2,16}$'
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={handleBlur}
                data-focused={isFocused('from_firstname').toString()}
                required
              >
              </input>
              <span>First Name must be at least 2 characters or more</span>
            </div>
            <div className='last-name'>
              <input
                type='text'
                name="from_lastname"
                value={lastName}
                placeholder='Last Name'
                autoComplete='family-name'
                pattern='^[A-Za-z]{2,16}$'
                onChange={(e) => setLastName(e.target.value)}
                onBlur={handleBlur}
                data-focused={isFocused('from_lastname').toString()}
                required
              >
              </input>
              <span>Last Name must be at least 2 characters or more</span>
            </div>
            <div className='email'>
              <input
                type='email'
                name='from_email'
                value={email}
                placeholder='Email'
                autoComplete='off'
                pattern="^(\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)(44)\)?[\s-]?)?\(?0?(?:\)[\s-]?)?([1-9]\d{1,4}\)?[\d[\s-]]+)((?:x|ext\.?|\#)\d{3,4})?$"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                data-focused={isFocused('from_email').toString()}
                required
              >
              </input>
              <span>Please provide a valid email address</span>
            </div>
            <div className='phone-number'>
              <input
                type='text'
                name='from_phonenumber'
                value={phoneNumber}
                placeholder='Phone Number'
                pattern="^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$"
                autoComplete='off'
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={handleBlur}
                data-focused={isFocused('from_phonenumber').toString()}
                required
              >
              </input>
              <span>Valid phone number and Country code is required</span>
            </div>
            <div className='job'>
              <p>What job role are you applying for?</p>
              <select 
                name='job'
                value={job}
                onChange={(e) => setJob(e.target.value)}
                onBlur={handleBlur}
                data-focused={isFocused('job').toString()}
                required 
              >
                <option value=''>Choose a role</option>
                <option value='Barista'>Barista</option>
              </select>
              <span>Please choose a role</span>
            </div>
            <div className='rtw'>
              <p>Do you have the right to work in the UK?</p>
              <select 
                name='right_to_work'
                onChange={(e) => setRightToWork(e.target.value)}
                onBlur={handleBlur}
                data-focused={isFocused('right_to_work').toString()}
                required  
              >
                <option value=''>Right to work?</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
              <span>Please choose Yes or No</span>
            </div>
            <div className='cv'>
              <button type='button' className="button-upload" onClick={handleClick}>
                {fileName ? <p>{fileName}</p> : <p>Upload File</p>}
              </button>
              <input
                name='resume'
                type="file"
                accept='.pdf, .docx'
                onChange={handleChange}
                ref={hiddenFileInput}
                required
                style={{ display: 'none'}}
              />
              <span style={{position: 'relative', top: '0.6em'}}>Please upload file</span>
            </div>
          </div>
          <button 
            disabled={!firstName | !lastName | !email | !phoneNumber | !job | !rightToWork | !resume }
            type='submit' 
            className='submit-btn'
            onClick={handleSubmit}
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default AppForm