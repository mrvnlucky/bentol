import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getVehicles,
  reset,
  deleteVehicle,
} from "../../../features/vehicle/vehicleSlice";

const VehicleList = () => {
  const { vehicles, isError, isSuccess, message } = useSelector(
    (state) => state.vehicles
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // if (isSuccess) {
    //   return;
    // }
    dispatch(getVehicles());
    // dispatch(reset());
    // return () => {
    //   dispatch(reset());
    // };
  }, [vehicles, isError, isSuccess, message, dispatch]);

  return (
    <>
      <Link to="/admin/vehicles/create">
        <button>Add</button>
      </Link>
      <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Merk</th>
        <th>KM/L</th>
        <th>Action</th>
      </tr>
      {vehicles.map((vehicle) => (
        <tr>
          <td>{vehicle._id} </td>
          <td>{vehicle.name} </td>
          <td>{vehicle.brand} </td>
          <td>{vehicle.kmpl} </td>
          <td>
            <Link to={`/admin/vehicles/edit/${vehicle._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => dispatch(deleteVehicle(vehicle._id))}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default VehicleList;
