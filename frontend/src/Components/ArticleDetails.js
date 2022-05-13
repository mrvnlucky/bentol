import React from "react";
import LogNavbar from "./LogNavbar";
import Likes from '../assets/Like.png'
const ArticleDetails = () => {
    return (
        <><LogNavbar />
            <body className='body-bg min-h-screen md:px-0 align-middle grid font-nunito tracking-wide'>
                <div className='m-6 bg-white rounded-lg border border-white shadow-lg p-6 flex flex-col items-center'>
                    <div className="mt-0">
                        <img class="rounded-lg" src="https://imgx.motorplus-online.com/crop/0x0:0x0/700x465/filters:watermark(file/2017/gridoto/img/watermark_motorplus.png,5,5,60)/photo/gridoto/2018/04/06/3381567926.jpg" alt="" />
                    </div>
                    <h1 className="text-5xl font-bold text-center mt-8">Pakai Oktan Booster untuk Motor tak Disarankan, ini Alasannya!</h1>
                    <h2 className="text-2xl font-bold text-blue mt-8">Kamis, 7 April 2022</h2>
                    <div className="text-justify flex flex-col text-xl space-y-5">
                        <p>Saat harga bahan bakar minyak (BBM) melambung tinggi, ada produk aftermarket berupa octane booster. Diklaim, saat menggunakan produk tersebut, dengan bensin oktan rendah pun performa mesin kendaraan tetap maksimal. Tapi, aman nggak sih?</p>
                        <p>Reza Rezdie dari Technical Service Division PT Astra Honda Motor (AHM) mengatakan, dari pabrikan tidak direkomendasikan penambahan produk semacam octane booster. Sebab, tidak diketahui secara pasti bagaimana efek terhadap mesinnya.</p>
                        <p>"Kami dari APM (agen pemegang merek) tentunya tidak merekomendasikan penggunaan octane booster. Kenapa, karena kita tidak mengetahui kandungan aditif yang terdapat dalam octane booster tersebut," ujar Reza dalam acara bedah teknologi Vario 160 yang diadakan secara virtual, Kamis (7/4/2022).</p>
                        <p>Memang menggunakan octane booster dijanjikan bisa memiliki efek performa kendaraan yang lebih baik. Namun, tak diketahui efek samping lainnya yang bisa timbul.</p>
                        <p>Reza menjelaskan, sistem injeksi atau PGM-FI milik Honda diklaim sudah canggih. Sistem itu dilengkapi dengan sensor O2.

                            "Setiap penggunaan jenis bahan bakar berbeda, dalam hal ini oktannya, nanti si O2 sensor itu bisa mendeteksi dari kandungan sisa pembakaran, terutama di bagian kandungan oksigennya. Itu akan memberikan feedback ke ECM (Engine Control Module) untuk menyesuaikan lagi agar output mesinnya walapupun menggunakan oktan rendah sampai oktan tinggi masih bisa optimal," ujarnya.</p>
                    </div>
                    <h2 className="text-2xl font-bold text-blue mt-8">Apakah anda menyukai artikel ini?</h2>
                    <button className="bg-crystal hover:bg-crystal focus:bg-dark-crystal h-15 w-20 rounded-md flex justify-center p-1 mt-3 mb-10">
                        <img src={Likes} alt="Thumb Icon" className='scale-75'></img>
                    </button>
                    <a href="#" className="inline-flex items-center mb-0 py-2 px-3 text-lg font-bold text-center text-black bg-white rounded-lg hover:underline font-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-2 -ml-1 w-8 h-8" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        Lihat Artikel Lainnya
                    </a>
                </div>
            </body>
        </>

    )
}
export default ArticleDetails