import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createVehicle, reset } from "../../../features/vehicle/vehicleSlice";

const VehicleCreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    kmpl: "",
  });

  const { name, brand, kmpl } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { vehicles, isError, isSuccess, message } = useSelector(
    (state) => state.vehicles
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      return;
    }
  }, [vehicles, isError, isSuccess, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const vehicleData = { name, brand, kmpl };

    dispatch(createVehicle(vehicleData));
    dispatch(reset());

    navigate("/admin/vehicles");
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
          <button type="submit">Tambah kendaraan</button>
        </div>
      </form>
    </>
  );
};

export default VehicleCreateForm;
