import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import EditProfile from "./Components/EditProfile.js";
import Profile from "./Components/Profile.js";
import Article from "./Components/Article.js";
import Map from "./Components/Map.js";
import Homepage from "./Components/Homepage.js";
import ArticleDetails from "./Components/ArticleDetails.js";
import { AuthContextProvider } from "./context/AuthContext.js";
import axios from "axios";

import "./Styles/App.css";
import Navbar from "./Components/Navbar.js";

axios.defaults.withCredentials = true;
const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/editprofile/:id" element={<EditProfile />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route exact path="/article" element={<Article />} />
            <Route exact path="/articledetails" element={<ArticleDetails />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
};

export default App;
