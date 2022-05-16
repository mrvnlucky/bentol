import React, { useContext } from "react";
import "../Styles/Navbar.css";
import Logo from "../assets/logoA.png";
import { Link } from "react-router-dom";

import Profile from "../assets/User.png";
import Exit from "../assets/Logout.png";
import AuthContext from "../context/AuthContext.js";

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const Navbar = () => {
  // Check if loggedin
  const { loggedIn } = useContext(AuthContext);

  function getToken() {
    var decoded = jwtDecode(Cookies.get("token"));
    return decoded.user;
  }

  return (
    <nav class="bg-blue px-2 sm:px-4 py-2.5 font-nunito tracking-wide sticky top-0">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <div class="flex items-center">
            <img src={Logo} alt="logo bentol" className="w-36" />
            <span class="self-center text-sm ml-8 whitespace-nowrap dark:text-white">
              BERANDA
            </span>
          </div>
        </Link>
        {loggedIn === false && (
          <div>
            <Link to="/login">
              <button class="h-9 px-10 m-2 bg-white hover:bg-silver rounded-lg text-black place-item-start">
                Masuk
              </button>
            </Link>
            <Link to="/register">
              <button class="h-9 px-10 m-2 bg-white hover:bg-silver rounded-lg text-black place-item-start">
                Daftar
              </button>
            </Link>
          </div>
        )}
        {loggedIn === true && (
          <div className="flex">
            <Link to={`/profile/${getToken()}`}>
              <div class="flex">
                <img src={Profile} alt="logo bentol" className="w-8" />
                <span class="self-center ml-2 text-sm whitespace-nowrap text-white">
                  PROFIL
                </span>
              </div>
            </Link>
            <a href="/" class="ml-12 flex">
              <img src={Exit} alt="logo bentol" className="w-8" />
              <span class="self-center ml-2 text-sm whitespace-nowrap text-white">
                KELUAR
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
