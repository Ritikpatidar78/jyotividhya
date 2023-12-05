import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'
import Someactive from './components/Someactive'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Someactive />
      <Aboutus />
      <Footer />

    </div>
  )
}

export default App