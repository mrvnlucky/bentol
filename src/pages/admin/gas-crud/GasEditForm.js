import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateGas, reset, getGasById } from "../../../features/gas/gasSlice";

const GasEditForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { gas, isError, isSuccess, message } = useSelector(
    (state) => state.gas
  );

  const [formData, setFormData] = useState({
    name: gas.name,
    price: gas.price,
  });

  const { name, price } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      return;
    }
    dispatch(getGasById(id));

    // if (isSuccess) {
    //   navigate("/admin/gas/");
    // }
  }, [gas, isError, isSuccess, message, dispatch, navigate, id]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const gasData = { name, price };

    dispatch(updateGas({ id, gasData }));
    navigate("/admin/gas/");
    dispatch(reset());
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl my-14">
        <h1 className="uppercase font-bold text-3xl mb-4">Edit Data BBM</h1>
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
                    Harga BBM per Liter
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={price}
                    placeholder="Masukkan harga BBM per Liter"
                    onChange={onChange}
                    className="border-silver rounded shadow-sm xl:text-xl w-full p-1 pl-2"
                  />
                </div>

                <div className="col-span-6">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-slate hover:bg-dark-slate text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
                  >
                    Edit BBM
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

export default GasEditForm;
