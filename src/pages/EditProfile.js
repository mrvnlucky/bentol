// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, editProfile } from "../features/auth/authSlice";
import { getVehicles } from "../features/vehicle/vehicleSlice";

// import LogNavbar from "./LogNavbar";
import "../styles/EditProfile.css";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const { vehicles } = useSelector((state) => state.vehicles);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    vehicle: user.vehicle,
  });

  const { name, email, vehicle } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getVehicles());
    if (isSuccess) {
    }

    return () => {
      dispatch(reset());
    };
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
      name,
      email,
      vehicle,
    };
    dispatch(editProfile(userData));

    dispatch(reset());
    navigate("/profile", { replace: true });
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const { id } = useParams();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   getUserById();
  // }, []);

  // const getUserById = async () => {
  //   // const userRes = await axios.get(`http://localhost:5000/user/${id}`);
  //   const userRes = await axios.get(
  //     `https://bentol-backend.herokuapp.com/user/${id}`
  //   );

  //   setName(userRes.data.name);
  //   setEmail(userRes.data.email);
  // };

  // const updateUser = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userData = {
  //       name,
  //       email,
  //     };
  //     // await axios.patch(`http://localhost:5000/user/${id}`, userData);
  //     await axios.patch(
  //       `https://bentol-backend.herokuapp.com//user/${id}`,
  //       userData
  //     );
  //     navigate(`/profile/${id}`);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

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
        <div className="mt-24 mb-auto mx-24 rounded-xl shadow-2xl">
          <div className="flex flex-col">
            <form onSubmit={onSubmit}>

              <div className="m-8">
                <h1 className="font-bold text-3xl">PROFIL</h1>
                <div className="m-3 ml-0 flex flex-row">
                  <label for="name" className="text-2xl font-bold w-1/4">
                    Nama
                  </label>
                  <input
                    type="name"
                    className="mb-3.5 border border-silver rounded w-1/4 p-1 pl-2 text-xl"
                    name="name"
                    id="name"
                    value={name}
                    onChange={onChange}
                  ></input>
                  {/* <div className="w-2/3"></div> */}
                </div>
                <div className="m-3 ml-0 flex flex-row">
                  <label for="email" className="text-2xl font-bold w-1/4">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="mb-3.5 border border-silver rounded w-1/4 p-1 pl-2 text-xl"
                    // placeholder="Masukkan Alamat E-mail"
                    value={email}
                    name="email"
                    id="email"
                    onChange={onChange}
                  ></input>
                  {/* <div className="w-2/3"></div> */}
                </div>
                <button
                  type="submit"
                  class="m-3 ml-0 h-9 px-10 bg-blue hover:bg-black rounded-lg text-white place-item-start"
                >
                  Simpan
                </button>
              </div>

              <div className="m-8">
                <h1 className="font-bold text-3xl">INFO KENDARAAN</h1>
                <div className="m-3 ml-0 flex flex-row">
                  <label for="merek" className="text-2xl font-bold w-1/4">
                    Merk Kendaraan
                  </label>
                  <span className="mb-3.5 w-1/4 text-2xl font-bold text-dark-blue"></span>
                </div>

                <div className="m-3 ml-0 flex flex-row">
                  <label for="model" className="text-2xl font-bold w-1/4">
                    Model Kendaraan
                  </label>
                  <div class="mb-3.5 w-1/3 xl:w-96">
                    <select
                      onChange={onChange}
                      name="vehicle"
                      id="vehicle"
                      class="form-select appearance-none block w-full p-1 pl-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option value={vehicle}> Pilih mobil anda</option>
                      {vehicles.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle._id}>
                          {vehicle.brand + " " + vehicle.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button class="m-3 ml-0 h-9 px-10 bg-blue hover:bg-black rounded-lg text-white place-item-start">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
};
export default EditProfile;
