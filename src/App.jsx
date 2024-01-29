import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Banner />
    </main>
  )
}

export default App
