import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import LogNavbar from "./LogNavbar";
import "../Styles/Profile.css";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  function getUserIdFromToken() {
    var decoded = jwtDecode(Cookies.get("token"));
    return decoded.user;
  }

  // console.log(tokenId);
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const userRes = await axios.get(`http://localhost:5000/user/${id}`);
    setName(userRes.data.name);
    setEmail(userRes.data.email);
  };

  return (
    <>
      <body className="body-bg min-h-screen md:px-0 align-middle grid font-nunito tracking-wide">
        <div className="m-6 border rounded-xl">
          <div className="flex flex-col">
            <div className="m-8">
              <h1 className="font-bold text-4xl underline">PROFIL</h1>
              <div className="m-3 ml-0 flex flex-row">
                <label for="name" className="text-3xl font-bold w-1/4">
                  Nama
                </label>
                <span className="w-3/4 text-3xl font-bold text-dark-blue">
                  {name}
                </span>
              </div>
              <div className="m-3 ml-0 flex flex-row">
                <label for="email" className="text-3xl font-bold w-1/4">
                  E-mail
                </label>
                <span className="w-3/4 text-3xl font-bold text-dark-blue">
                  {email}
                </span>
              </div>
              <Link to={`/editprofile/${getUserIdFromToken()}`}>
                <button
                  // onClick={navigate(`/editprofile/${tokenId}`)}
                  class="m-3 ml-0 h-9 px-10 bg-blue hover:bg-black rounded-lg text-white place-item-start"
                >
                  Edit
                </button>
              </Link>
            </div>
            <div className="m-8">
              <h1 className="font-bold text-4xl underline">INFO KENDARAAN</h1>
              <div className="m-3 ml-0 flex flex-row">
                <label for="merek" className="text-3xl font-bold w-1/4">
                  Merk Kendaraan
                </label>
                <span className="w-3/4 text-3xl font-bold text-dark-blue">
                  Honda
                </span>
              </div>
              <div className="m-3 ml-0 flex flex-row">
                <label for="model" className="text-3xl font-bold w-1/4">
                  Model Kendaraan
                </label>
                <span className="w-3/4 text-3xl font-bold text-dark-blue">
                  Freed
                </span>
              </div>
              <button class="m-3 ml-0 h-9 px-10 bg-blue hover:bg-black rounded-lg text-white place-item-start">
                Edit
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default Profile;
