import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import LogNavbar from "./LogNavbar";
import "../Styles/EditProfile.css";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    // const userRes = await axios.get(`http://localhost:5000/user/${id}`);
    const userRes = await axios.get(
      `https://bentol-backend.herokuapp.com/user/${id}`
    );
    setName(userRes.data.name);
    setEmail(userRes.data.email);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name,
        email,
      };
      // await axios.patch(`http://localhost:5000/user/${id}`, userData);
      await axios.patch(
        `https://bentol-backend.herokuapp.com//user/${id}`,
        userData
      );
      navigate(`/profile/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  // async function register(e) {
  //   e.preventDefault();

  //   try {
  //     const registerData = {
  //       name,
  //       email,
  //       password,
  //       passwordVerify,
  //     };

  //     await axios.post("http://localhost:5000/user/register", registerData);
  //     // await axios.post(
  //     //   "https://mern-auth-template-tutorial.herokuapp.com/auth/",
  //     //   registerData
  //     // );
  //     await getLoggedIn();
  //     navigate("/", { replace: true });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  return (
    <>
      <body className="body-bg min-h-screen md:px-0 align-middle grid font-nunito tracking-wide">
        <div className="m-6 border rounded-xl">
          <div className="flex flex-col">
            <div className="m-8">
              <h1 className="font-bold text-4xl underline">PROFIL</h1>
              <form onSubmit={updateUser}>
                <div className="m-3 ml-0 flex flex-row">
                  <label for="name" className="text-3xl font-bold w-1/3">
                    Nama
                  </label>
                  <input
                    type="name"
                    className="mb-3.5 border border-silver rounded w-1/3 p-1 pl-2"
                    // placeholder="Masukkan Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <div className="w-2/3"></div>
                </div>
                <div className="m-3 ml-0 flex flex-row">
                  <label for="email" className="text-3xl font-bold w-1/3">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="mb-3.5 border border-silver rounded w-1/3 p-1 pl-2"
                    // placeholder="Masukkan Alamat E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <div className="w-2/3"></div>
                </div>
                <button
                  type="submit"
                  class="m-3 ml-0 h-9 px-10 bg-blue hover:bg-black rounded-lg text-white place-item-start"
                >
                  Simpan
                </button>
              </form>
            </div>
            <div className="m-8">
              <h1 className="font-bold text-4xl underline">INFO KENDARAAN</h1>
              <div className="m-3 ml-0 flex flex-row">
                <label for="merek" className="text-3xl font-bold w-1/4">
                  Merk Kendaraan
                </label>
                {/* //DROPDOWN */}
                <div class=" relative inline-block text-left dropdown w-40">
                  <span class="rounded-md shadow-sm">
                    <button
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-dark transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="true"
                      aria-controls="headlessui-menu-items-117"
                    >
                      <span>Merk</span>
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>
                  <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div
                      class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      aria-labelledby="headlessui-menu-button-1"
                      id="headlessui-menu-items-117"
                      role="menu"
                    >
                      <div class="py-1">
                        <a
                          href="javascript:void(0)"
                          tabindex="0"
                          class="hover:bg-silver text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Honda
                        </a>
                        <a
                          href="javascript:void(0)"
                          tabindex="1"
                          class="hover:bg-silver text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Toyota
                        </a>
                        <a
                          href="javascript:void(0)"
                          tabindex="2"
                          class="hover:bg-silver text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Mazda
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //DROPDOWN END */}
                {/* <div className='w-2/3'></div> */}
              </div>
              <div className="m-3 ml-0 flex flex-row">
                <label for="model" className="text-3xl font-bold w-1/4">
                  Model Kendaraan
                </label>
                <div class=" relative inline-block text-left dropdown w-40">
                  <span class="rounded-md shadow-sm">
                    <button
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-dark transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="true"
                      aria-controls="headlessui-menu-items-117"
                    >
                      <span>Model</span>
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>
                  <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div
                      class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      aria-labelledby="headlessui-menu-button-1"
                      id="headlessui-menu-items-117"
                      role="menu"
                    >
                      <div class="px-4 py-3">
                        <p class="text-sm leading-5">Merk Mobil</p>
                      </div>
                      <div class="py-1">
                        <a
                          href="javascript:void(0)"
                          tabindex="0"
                          class="hover:bg-silver text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Mobil 1
                        </a>
                        <a
                          href="javascript:void(0)"
                          tabindex="1"
                          class="hover:bg-silver text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Mobil 2
                        </a>
                        <a
                          href="javascript:void(0)"
                          tabindex="2"
                          class="hover:bg-silver text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Mobil 3
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="m-3 ml-0 h-9 px-10 bg-blue hover:bg-black rounded-lg text-white place-item-start">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default EditProfile;
