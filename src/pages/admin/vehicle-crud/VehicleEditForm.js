import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  updateVehicle,
  reset,
  getVehicleById,
  deleteVehicle,
} from "../../../features/vehicle/vehicleSlice";

const VehicleEditForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { vehicles, isError, isSuccess, message } = useSelector(
    (state) => state.vehicles
  );

  const [formData, setFormData] = useState({
    name: vehicles.name,
    brand: vehicles.brand,
    kmpl: vehicles.kmpl,
  });

  const { name, brand, kmpl } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      return;
    }
    dispatch(getVehicleById(id));

    // if (isSuccess) {
    //   navigate("/admin/vehicles/");
    // }
  }, [vehicles, isError, isSuccess, message, dispatch, navigate, id]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const vehicleData = { name, brand, kmpl };

    dispatch(updateVehicle({ id, vehicleData }));
    navigate("/admin/vehicles/");
    dispatch(reset());
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl my-14">
        <h1 className="uppercase font-bold text-3xl mb-4">Edit Data Vehicle</h1>
        <form onSubmit={onSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label for="name" className="block text-xl font-medium text-gray">
                    Nama Kendaraan
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Masukkan nama kendaraan"
                    onChange={onChange}
                    className="border-silver rounded shadow-sm xl:text-xl w-full p-1 pl-2"
                  />
                </div>

                <div className="col-span-6">
                  <label for="brand" className="block text-xl font-medium text-gray">
                    Merk Kendaraan
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={brand}
                    placeholder="Masukkan merk kendaraan"
                    onChange={onChange}
                    className="border-silver rounded shadow-sm xl:text-xl w-full p-1 pl-2"
                  />
                </div>

                <div className="col-span-6">
                  <label for="kmpl" className="block text-xl font-medium text-gray">
                    Konsumsi Bensin
                  </label>
                  <input
                    type="number"
                    id="kmpl"
                    name="kmpl"
                    value={kmpl}
                    placeholder="Masukkan kmpl kendaraan"
                    onChange={onChange} className="border-silver rounded shadow-sm xl:text-xl w-full p-1 pl-2"
                  />
                </div>

                <div className="col-span-6">
                  <button type="submit" className="py-2 px-4  bg-slate hover:bg-dark-slate text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                    Edit kendaraan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default VehicleEditForm;
