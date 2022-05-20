// import React, { useContext, useState } from "react";
// import axios from "axios";
// // import Navbar from "./Navbar";
import "../styles/Register.css";
// import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
// import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <body className="body-bg min-h-screen md:px-0 align-middle grid content-center font-nunito tracking-wide">
        <div>
          <div className="text-center font-nunito font-bold mb-2">
            <h1 className="">DAFTAR AKUN</h1>
          </div>
          <div className="SignUpForm">
            <form onSubmit={onSubmit} className="flex flex-col">
              <div className="flex flex-row">
                <label for="name" className="w-1/3">
                  Nama
                </label>
                <input
                  type="text"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Masukkan Nama Lengkap"
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-row">
                <label for="email" className="w-1/3">
                  Alamat E-mail
                </label>
                <input
                  type="email"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="e.g example@mail.com"
                  onChange={onChange}
                ></input>
              </div>
              <div className="flex flex-row">
                <label for="password" className="w-1/3">
                  Sandi
                </label>
                <input
                  type="password"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Masukkan Sandi"
                  onChange={onChange}
                ></input>
              </div>
              <div className="flex flex-row">
                <label for="password" className="w-1/3">
                  Konfirmasi Sandi
                </label>
                <input
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  type="password"
                  placeholder="Konfirmasi Sandi"
                  id="password2"
                  name="password2"
                  onChange={onChange}
                  value={password2}
                ></input>
              </div>
              {/* <div className="grid place-items-center">
                <div>
                  <input
                    type="checkbox"
                    className="accent-silver bg-silver border border-black"
                  ></input>
                  <label for="checkbox" className="ml-2">
                    Ingat Akun Saya
                  </label>
                </div>
              </div> */}
              <div className="grid grid-cols-3">
                <div></div>
                <button
                  type="submit"
                  class="h-9 px-10 m-2 bg-blue hover:bg-black rounded-lg text-white place-item-start"
                >
                  Daftar
                </button>
                {/* <Link to="/login">
                  <div className=" text-blue text-center p-3 hover:underline">
                    Punya Akun?
                  </div>
                </Link> */}
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Register;
