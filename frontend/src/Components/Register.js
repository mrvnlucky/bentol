import React from 'react';
import '../Styles/Register.css'
const Register = () => {
    return (
        <body className='body-bg min-h-screen md:px-0 align-middle grid content-center font-nunito tracking-wide'>
            <div>
                <div className='text-center font-nunito font-bold mb-2'>
                    <h1 className=''>DAFTAR AKUN</h1>
                </div>
                <div className='SignUpForm'>
                    <form className='flex flex-col'>
                        <div className='flex flex-row'>
                            <label for='name' className='w-1/3'>Nama</label>
                            <input className='mb-3.5 border border-silver rounded w-2/3 p-1 pl-2' placeholder='Masukkan Nama Lengkap'></input>
                        </div>
                        <div className='flex flex-row'>
                            <label for='email' className='w-1/3'>Alamat E-mail</label>
                            <input type='email' className='mb-3.5 border border-silver rounded w-2/3 p-1 pl-2' placeholder='e.g example@mail.com'></input>
                        </div>
                        <div className='flex flex-row'>
                            <label for='telephone' className='w-1/3'>Telepon</label>
                            <input type="number" className='mb-3.5 border border-silver rounded w-2/3 p-1 pl-2' placeholder='+62 8000 0000 000'></input>
                        </div>
                        <div className='flex flex-row'>
                            <label for='password' className='w-1/3'>Sandi</label>
                            <input type='password' className='mb-3.5 border border-silver rounded w-2/3 p-1 pl-2' placeholder='Masukkan Sandi'></input>
                        </div>
                        <div className='flex flex-row'>
                            <label for='password' className='w-1/3'>Konfirmasi Sandi</label>
                            <input className='mb-3.5 border border-silver rounded w-2/3 p-1 pl-2' type='password' placeholder='Konfirmasi Sandi'></input>
                        </div>
                        <div className='grid place-items-center'>
                            <div>
                                <input type='checkbox' className='accent-silver bg-silver border border-black'></input>
                                <label for='checkbox' className='ml-2'>Ingat Akun Saya</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-3">
                            <div></div>
                            <button class="h-9 px-10 m-2 bg-blue rounded-lg text-white place-item-start">Daftar</button>
                            <a href="login" className=" text-blue text-center p-3">Punya Akun?</a>
                        </div>
                    </form>
                </div >
            </div >
        </body >
    )
}

export default Register