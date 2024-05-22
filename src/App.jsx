import React from 'react'
import Header from './Header.jsx'
import './App.css'
import Bannar from './Bannar.jsx'
import Service from './Service.jsx'
import Boxs from './Boxs.jsx'
import Testimonials from './Testimonials.jsx'
import Tools from './Tools.jsx'
import Footer from './Footer.jsx'

const App = () => {
  return (
    <>
    <div className="workingArea">
      <div className="container">
        <Header/>
      <Bannar/>
      <Service/>
      <Boxs/>
      <Testimonials/>
      <Tools/>
      <Footer/>
      </div>
    </div>
    </>
  )
}

export default App