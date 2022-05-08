import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
import EditProfile from './Components/EditProfile.js'
import Profile from './Components/Profile.js'
import Article from './Components/Article.js'
import './Styles/App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/article' element={<Article />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App