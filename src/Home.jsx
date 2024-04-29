import React from 'react'
import Banner from './components/Banner'
import Content from './components/Content'
import './App.css'

const Home = () => {
  return (
    <>
    <div className='container'>
      <Banner />
      <Content />
    </div>
    </>
  )
}

export default Home