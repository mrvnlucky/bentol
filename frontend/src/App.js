import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
import './Styles/App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App