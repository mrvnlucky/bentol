import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createGas, reset } from "../../../features/gas/gasSlice";

const GasCreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  const { name, price } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { gas, isError, isSuccess, message } = useSelector(
    (state) => state.gas
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      return;
    }
  }, [gas, isError, isSuccess, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const gasData = { name, price };

    dispatch(createGas(gasData));
    dispatch(reset());

    navigate("/admin/gas");
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl my-14">
        <h1 className="uppercase font-bold text-3xl mb-4">Form Data BBM</h1>
        <form onSubmit={onSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    for="name"
                    className="block text-xl font-medium text-gray"
                  >
                    Nama BBM
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
                  <label
                    for="price"
                    className="block text-xl font-medium text-gray"
                  >
                    Harga BBM
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    placeholder="Masukkan merk kendaraan"
                    onChange={onChange}
                    className="rounded shadow-sm xl:text-xl w-full p-1 pl-2"
                  />
                </div>

                <div className="col-span-6">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-slate hover:bg-dark-slate text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                  >
                    Tambah BBM
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

export default GasCreateForm;
