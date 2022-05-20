// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
// import AuthContext from "../context/AuthContext.js";

import { useState, useEffect } from "react";
// import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
// import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <body className="body-bg min-h-screen md:px-0 align-middle grid content-center font-nunito tracking-wide">
        <div>
          <div className="text-center font-nunito font-bold mb-2">
            <h1 className="">MASUK KE AKUN-MU</h1>
          </div>
          <div className="LoginForm">
            <form onSubmit={onSubmit} className="flex flex-col">
              <div className="flex flex-row">
                <label for="email" className="w-1/3">
                  Alamat E-mail
                </label>
                <input
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  placeholder="Masukkan Alamat E-Mail"
                  onChange={onChange}
                />
              </div>
              <div className="flex flex-row">
                <label for="password" className="w-1/3">
                  Sandi
                </label>
                <input
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  placeholder="Masukkan Sandi"
                  onChange={onChange}
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
                  className="h-9 px-10 m-2 bg-blue hover:bg-black rounded-lg text-white place-item-start"
                >
                  Masuk
                </button>
                <Link to="/register">
                  <div className="text-sm text-blue text-center p-3 hover:underline">
                    Belum punya akun?
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
