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
      <form onSubmit={onSubmit}>
        <div>
          <label for="name">Nama Kendaraan</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Masukkan nama kendaraan"
            onChange={onChange}
          />
        </div>

        <div>
          <label for="brand">Merk Kendaraan</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={brand}
            placeholder="Masukkan merk kendaraan"
            onChange={onChange}
          />
        </div>

        <div>
          <label for="kmpl">Konsumsi Bensin</label>
          <input
            type="number"
            id="kmpl"
            name="kmpl"
            value={kmpl}
            placeholder="Masukkan kmpl kendaraan"
            onChange={onChange}
          />
        </div>

        <div>
          <button type="submit">Edit kendaraan</button>
        </div>
      </form>
    </>
  );
};

export default VehicleEditForm;
