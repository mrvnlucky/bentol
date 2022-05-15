import React from "react";
import LogNavbar from "./LogNavbar";
import Likes from "../assets/Like.png";
//import '../Styles/Article.css'
const Article = () => {
  return (
    <>
      <LogNavbar />
      <div className="grid grid-cols-2 justify-items-center m-4 mt-8 font-nunito gap-y-10 tracking-wide">
        <div class="max-w-xl bg-white rounded-lg border border-white shadow-lg">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://imgx.motorplus-online.com/crop/0x0:0x0/700x465/filters:watermark(file/2017/gridoto/img/watermark_motorplus.png,5,5,60)/photo/gridoto/2018/04/06/3381567926.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-black">
                Siap-Siap Harga Pertalite & Pertamax Naik, Cek Daftar Harga BBM
                Pertamina April 2022
              </h5>
            </a>
            <p class="mb-3 font-bold text-gray-700 text-blue">
              Kamis, 7 April 2022
            </p>
          </div>
          <div className="flex flex-row justify-between p-5">
            <div className="box-border h-15 w-20 rounded-md bg-crystal flex flex-row items-center p-1 px-3">
              <div className="">
                <img src={Likes} alt="Thumb Icon" className=""></img>
              </div>
              <h1 className="font-bold w-2/3 text-center text-xl ml-2">2</h1>
            </div>
            <a
              href="#"
              className="inline-flex float-right items-center mb-0 py-2 px-3 text-lg font-bold text-center text-black bg-white rounded-lg hover:underline"
            >
              Lihat Artikel
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-xl bg-white rounded-lg border border-white shadow-lg">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://imgx.motorplus-online.com/crop/0x0:0x0/700x465/filters:watermark(file/2017/gridoto/img/watermark_motorplus.png,5,5,60)/photo/gridoto/2018/04/06/3381567926.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-black">
                Pertamax Naik, Apakah Pertalite Juga?
              </h5>
            </a>
            <p class="mb-3 font-bold text-gray-700 text-blue">
              Kamis, 7 April 2022
            </p>
          </div>
          <div className="flex flex-row justify-between p-5">
            <div className="box-border h-15 w-20 rounded-md bg-crystal flex flex-row items-center p-1 px-3">
              <div className="">
                <img src={Likes} alt="Thumb Icon" className=""></img>
              </div>
              <h1 className="font-bold w-2/3 text-center text-xl ml-2">10</h1>
            </div>
            <a
              href="#"
              className="inline-flex float-right items-center mb-0 py-2 px-3 text-lg font-bold text-center text-black bg-white rounded-lg hover:underline"
            >
              Lihat Artikel
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-xl bg-white rounded-lg border border-white shadow-lg">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://imgx.motorplus-online.com/crop/0x0:0x0/700x465/filters:watermark(file/2017/gridoto/img/watermark_motorplus.png,5,5,60)/photo/gridoto/2018/04/06/3381567926.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-black">
                Siap-Siap Harga Pertalite & Pertamax Naik, Cek Daftar Harga BBM
                Pertamina April 2022
              </h5>
            </a>
            <p class="mb-3 font-bold text-blue">Kamis, 7 April 2022</p>
          </div>
          <div className="flex flex-row justify-between p-5">
            <div className="box-border h-15 w-20 rounded-md bg-crystal flex flex-row items-center p-1 px-3">
              <div className="">
                <img src={Likes} alt="Thumb Icon" className=""></img>
              </div>
              <h1 className="font-bold w-2/3 text-center text-xl ml-2">2</h1>
            </div>
            <a
              href="#"
              className="inline-flex float-right items-center mb-0 py-2 px-3 text-lg font-bold text-center text-black bg-white rounded-lg hover:underline"
            >
              Lihat Artikel
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;
