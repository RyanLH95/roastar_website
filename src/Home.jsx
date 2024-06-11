import React from 'react'
import Banner from './components/Banner'
import Content from './components/Content'
import './App.css'

const Home = () => {
  return (
    <main className='container'>
      <Banner />
      <Content />
    </main>
  )
}

export default Home