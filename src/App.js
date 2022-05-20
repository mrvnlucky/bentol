// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React, { useContext } from "react";
// import Login from "./Components/Login.js";
// import Register from "./Components/Register.js";
// import EditProfile from "./Components/EditProfile.js";
// import Profile from "./Components/Profile.js";
// import Article from "./Components/Article.js";
// // import Map from "./Components/Map.js";
// import Homepage from "./Components/Homepage.js";
// import ArticleDetails from "./Components/ArticleDetails.js";
// import { AuthContextProvider } from "./context/AuthContext.js";
// import axios from "axios";

// Dependancies
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Homepage from "./pages/Homepage.js";
// import Article from "./pages/Article";
// import ArticleDetails from "./pages/ArticleDetails";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Navbar from "./components/Navbar.js";
import "./styles/App.css";

// import axios from "axios";

// axios.defaults.withCredentials = true;
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          {/* <Route path="/article" element={<Article />} /> */}
          {/* <Route path="/articledetails" element={<ArticleDetails />} /> */}
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
