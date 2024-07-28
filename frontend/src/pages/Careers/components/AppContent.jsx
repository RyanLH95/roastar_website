import React, { useState } from 'react'
import { X } from 'lucide-react'
import AppForm from './AppForm';

const AppContent = () => {
    const [ showForm, setShowForm ] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm)
    }
  
  return (
    <>
      <button 
        className='apply-btn'
        onClick={handleClick}
      >
        APPLY HERE
      </button>

      {showForm && (
        <div 
          className='application no-scroll'
          style={{animation:'dropTop .3s linear'}}
        >
          <div 
            className='close-div'
          >
            <button 
              className='close-btn'
              onClick={handleClick}
            >
              <X size={30}/>
            </button>
          </div>
          <AppForm />
        </div>
      )}
    </>
  )
}

export default AppContent