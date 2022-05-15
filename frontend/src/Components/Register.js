import React, { useContext, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../Styles/Register.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        name,
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/register", registerData);
      // await axios.post(
      //   "https://mern-auth-template-tutorial.herokuapp.com/auth/",
      //   registerData
      // );
      await getLoggedIn();
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Navbar />
      <body className="body-bg min-h-screen md:px-0 align-middle grid content-center font-nunito tracking-wide">
        <div>
          <div className="text-center font-nunito font-bold mb-2">
            <h1 className="">DAFTAR AKUN</h1>
          </div>
          <div className="SignUpForm">
            <form onSubmit={register} className="flex flex-col">
              <div className="flex flex-row">
                <label for="name" className="w-1/3">
                  Nama
                </label>
                <input
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  placeholder="Masukkan Nama Lengkap"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="flex flex-row">
                <label for="email" className="w-1/3">
                  Alamat E-mail
                </label>
                <input
                  type="email"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  placeholder="e.g example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></input>
              </div>
              {/* <div className="flex flex-row">
                <label for="telephone" className="w-1/3">
                  Telepon
                </label>
                <input
                  type="number"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  placeholder="+62 8000 0000 000"
                ></input>
              </div> */}
              <div className="flex flex-row">
                <label for="password" className="w-1/3">
                  Sandi
                </label>
                <input
                  type="password"
                  className="mb-3.5 border border-silver rounded w-2/3 p-1 pl-2"
                  placeholder="Masukkan Sandi"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
                  onChange={(e) => setPasswordVerify(e.target.value)}
                  value={passwordVerify}
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
                  Daftar
                </button>
                <a
                  href="login"
                  className=" text-blue text-center p-3 hover:underline"
                >
                  Punya Akun?
                </a>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Register;
