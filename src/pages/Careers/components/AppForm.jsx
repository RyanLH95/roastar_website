import React, { useState } from 'react'
import DialingCodes from './DialingCodes'

const AppForm = () => {
    const [ changeFile, setChangeFile ] = React.useState(true);
    const [ file, setFile ] = useState('')

    const fileUpload = () => {
    if (fileUpload.textContent = this.files[0].name > 0) {
      setFile('')
    } else {
      setFile(null)
    }
    setChangeFile(false)
  }

  return (
    <>
      <div className='app-card'>
        <img 
          src='../../../../logo/Logo ROASTAR-white.PNG'
          width={150}
        />
        <form className='app-form'>
          <h3>Personal Details</h3>
            <div className='form-content'>
            <input
              type='text'
              name='first_name'
              placeholder='First Name'
              autoComplete='given-name'
              required={true}
            >
            </input>
            <input
              type='text'
              name='last_name'
              placeholder='Last Name'
              autoComplete='family-name'
            >
            </input>
            <input
              type='email'
              name='email'
              placeholder='Email'
              autoComplete='off'
            >
            </input>
            <div className='phone-number'>
              <DialingCodes />
              <input
                type='text'
                name='phone_number'
                placeholder='Phone Number'
                autoComplete='off'
              >
              </input>
            </div>
            <div className='job'>
              <p>Choose a Job:</p>
              <select name='jobs'>
                <option value='barista'>Barista</option>
              </select>
            </div>
            <div className='rtw'>
              <p>Do you have a Right to Work in the UK?</p>
              <select name='jobs'>
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
              </select>
            </div>
            <label className='cv' htmlFor='actual-btn'>
              {changeFile ? (<div>Upload CV</div>) : (<div>{file}</div>)}
              <input
                style={{color: 'white', background: 'none'}}
                type='file'
                id='actual-btn'
                name='cv'
              >
              </input>
            </label>
          </div>
        </form>
      </div>
    </>
  )
}

export default AppForm