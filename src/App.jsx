import React from 'react'
import Header from './Header.jsx'
import './App.css'
import Bannar from './Bannar.jsx'

const App = () => {
  return (
    <>
    <div className="workingArea">
      <div className="container">
        <Header/>
      <Bannar/>
      </div>
    </div>
    </>
  )
}

export default App