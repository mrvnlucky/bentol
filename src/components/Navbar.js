// import React, { useContext } from "react";
// import "../Styles/Navbar.css";
// import Logo from "../assets/logoA.png";
// import { Link } from "react-router-dom";

import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { adminLogout } from "../features/admin/adminSlice";
import Logo from "../assets/logoA.png";

// import Profile from "../assets/User.png";
// import Exit from "../assets/Logout.png";
// import AuthContext from "../context/AuthContext.js";

// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.admin);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const onAdminLogout = () => {
    dispatch(adminLogout());
    navigate("/admin");
  };

  if (admin)
    return (
      <nav class="bg-blue px-2 sm:px-4 py-2.5 font-nunito tracking-wide sticky top-0 shadow-lg">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/admin/vehicles">
            <div class="flex items-center">
              <img src={Logo} alt="logo bentol" className="w-36" />
              <span class="self-center text-sm ml-8 whitespace-nowrap dark:text-white">
                BERANDA
              </span>
            </div>
          </Link>
          <Link to="/admin/vehicles">
            <div class="flex items-center">
              <span class="self-center text-sm ml-8 whitespace-nowrap dark:text-white">
                Tabel Vehicles
              </span>
            </div>
          </Link>
          <Link to="/admin/gas">
            <div class="flex items-center">
              <span class="self-center text-sm ml-8 whitespace-nowrap dark:text-white">
                Tabel Gas
              </span>
            </div>
          </Link>
          <div className="flex">
            <div class="ml-12 flex">
              <button
                onClick={onAdminLogout}
                class="flex self-center ml-2 text-sm whitespace-nowrap text-white"
              >
                <span className="self-center">
                  <FaSignOutAlt />
                </span>
                <span className="ml-2">KELUAR</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  else
    return (
      <nav class="bg-blue px-2 sm:px-4 py-2.5 font-nunito tracking-wide sticky top-0 shadow-lg">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <div class="flex items-center">
              <img src={Logo} alt="logo bentol" className="w-36" />
              <span class="self-center text-sm ml-8 whitespace-nowrap dark:text-white">
                BERANDA
              </span>
            </div>
          </Link>
          {user ? (
            <div className="flex">
              <Link to="/profile">
                <div class="flex">
                  <span class="flex self-center text-sm whitespace-nowrap text-white">
                    <span className="self-center">
                      <FaUserAlt />
                    </span>
                    <span className="ml-2">PROFIL</span>
                  </span>
                </div>
              </Link>
              <div class="ml-12 flex">
                <button
                  onClick={onLogout}
                  class="flex self-center ml-2 text-sm whitespace-nowrap text-white"
                >
                  <span className="self-center">
                    <FaSignOutAlt />
                  </span>
                  <span className="ml-2">KELUAR</span>
                </button>
              </div>
            </div>
          ) : (
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
        </div>
      </nav>
    );
};

export default Navbar;
