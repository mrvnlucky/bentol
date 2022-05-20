import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

// import LogNavbar from "./LogNavbar";
import "../styles/Profile.css";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [user, isError, message, navigate, dispatch]);

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const userData = {
  //     email,
  //     password,
  //   };

  //   dispatch(login(userData));
  // };
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const { id } = useParams();

  // function getUserIdFromToken() {
  //   var decoded = jwtDecode(Cookies.get("token"));
  //   return decoded.user;
  // }

  // // console.log(tokenId);
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

  return (
    <>
      <body className="body-bg min-h-screen md:px-0 align-middle grid font-nunito tracking-wide">
        <div className="mt-24 mb-auto mx-24 rounded-xl shadow-2xl">
          <div className="flex flex-col">

            <div className="m-8">
              <h1 className="font-bold text-3xl">PROFIL</h1>
              <div className="m-3 ml-0 flex flex-row">
                <label for="name" className="text-2xl font-bold w-1/4">
                  Nama
                </label>
                <span className="mb-3.5 w-1/3 text-2xl text-dark-blue">
                  {user && user.name}
                </span>
              </div>
              <div className="m-3 ml-0 flex flex-row">
                <label for="email" className="text-2xl font-bold w-1/4">
                  E-mail
                </label>
                <span className="mb-3.5 w-1/3 text-2xl text-dark-blue">
                  {user && user.email}
                </span>
              </div>
              <Link to={"/profile/edit"}>
                <button class="m-3 ml-0 h-9 px-10 bg-blue hover:bg-black rounded-lg text-white place-item-start">
                  Edit
                </button>
              </Link>
            </div>

            <div className="m-8">
              <h1 className="font-bold text-3xl">INFO KENDARAAN</h1>
              <div className="m-3 ml-0 flex flex-row">
                <label for="merek" className="mb-3.5 text-2xl font-bold w-1/4">
                  Merk Kendaraan
                </label>
                <span className="mb-3.5 w-1/3 text-2xl text-dark-blue">
                  {user.vehicle ? user.vehicle.brand : "-"}
                </span>
              </div>
              <div className="m-3 ml-0 flex flex-row">
                <label for="model" className="mb-3.5 text-2xl font-bold w-1/4">
                  Model Kendaraan
                </label>
                <span className="mb-3.5 w-1/3 text-2xl text-dark-blue">
                  {user.vehicle ? user.vehicle.name : "-"}
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
