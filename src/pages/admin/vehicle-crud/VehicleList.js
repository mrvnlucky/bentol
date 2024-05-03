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
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-14">
          <Link to="/admin/vehicles/create">
            <button type="button" id="add" className="py-2 px-4  bg-slate hover:bg-dark-slate text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
              Add Data
            </button>
          </Link>

          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm uppercase font-semibold">
                      ID
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm uppercase font-semibold">
                      Nama
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm uppercase font-semibold">
                      Merk
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm uppercase font-semibold">
                      KM/L
                    </th>
                    <th scope="col" className="px-5 py-3 bg-white  border-b border-gray text-gray  text-center text-sm uppercase font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray whitespace-no-wrap">
                              {vehicle._id}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                        <p className="text-gray whitespace-no-wrap">
                          {vehicle.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                        <p className="text-gray whitespace-no-wrap">
                          {vehicle.brand}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green leading-tight">
                          <span aria-hidden="true" className="absolute inset-0 bg-green opacity-50 rounded-full">
                          </span>
                          <span className="relative">
                            <span className="text-sm">{vehicle.kmpl}</span>
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray bg-white text-sm">
                        <Link to={`/admin/vehicles/edit/${vehicle._id}`}>
                          <button className="mr-4 py-2 px-4  bg-white hover:bg-gray focus:ring-gray-500 focus:ring-offset-green text-black w-15 transition ease-in duration text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Edit
                          </button>
                        </Link>
                        <button onClick={() => dispatch(deleteVehicle(vehicle._id))} className="py-2 px-4  bg-red hover:bg-dark-red focus:ring-red-500 focus:ring-offset-red text-white w-30 transition ease-in duration text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleList;
