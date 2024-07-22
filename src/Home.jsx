import React from 'react'
import Banner from './components/Banner'
import './App.css'
import HomeContainer from './components/HomeContainer'

const Home = () => {
  return (
    <main className='container'>
      <Banner />
      <HomeContainer />
    </main>
  )
}

export default Home