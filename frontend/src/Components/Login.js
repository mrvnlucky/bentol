import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
import "../Styles/Login.css";
import AuthContext from "../context/AuthContext.js";

// import Cookies from 'js-cookie';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);

  // Login Function
  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      // await axios.post("http://localhost:5000/user/login", loginData);
      await axios.post(
        "https://bentol-backend.herokuapp.com/user/login",
        loginData
      );

      await getLoggedIn();
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <body className="body-bg min-h-screen md:px-0 align-middle grid content-center font-nunito tracking-wide">
        <div>
          <div className="text-center font-nunito font-bold mb-2">
            <h1 className="">MASUK KE AKUN-MU</h1>
          </div>
          <div className="LoginForm">
            <form onSubmit={login} className="flex flex-col">
              <div className="flex flex-row">
                <label for="email" className="w-1/3">
                  Alamat E-mail
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type={"email"}
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  placeholder="Masukkan Alamat E-Mail"
                ></input>
              </div>
              <div className="flex flex-row">
                <label for="password" className="w-1/3">
                  Sandi
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  placeholder="Masukkan Sandi"
                ></input>
              </div>
              <div className="grid place-items-center">
                <div>
                  <input
                    type="checkbox"
                    className="accent-silver bg-silver border border-black"
                  ></input>
                  <label for="checkbox" className="ml-2">
                    Ingat Akun Saya
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div></div>
                <button
                  type="submit"
                  class="h-9 px-10 m-2 bg-blue hover:bg-black rounded-lg text-white place-item-start"
                >
                  Masuk
                </button>
                <a
                  href="register"
                  className=" text-blue text-center p-3 hover:underline"
                >
                  Lupa Sandi?
                </a>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
