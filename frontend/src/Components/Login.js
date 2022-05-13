import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import '../Styles/Login.css'
import Cookies from 'js-cookie';
const Login = () => {

    let navigate = useNavigate()

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: value })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        let { email, password } = input
        axios.post(`https://backendexample.sanbersy.com/api/user-login`, { email, password })
            .then((res) => {
                let { token } = res.data
                Cookies.set('token', token)
                navigate('/profile')
            })
    }

    return (
        <><Navbar />
            <body className='body-bg min-h-screen md:px-0 align-middle grid content-center font-nunito tracking-wide'>
                <div>
                    <div className='text-center font-nunito font-bold mb-2'>
                        <h1 className=''>MASUK KE AKUN-MU</h1>
                    </div>
                    <div className='LoginForm'>
                        <form onSubmit={handleLogin} className='flex flex-col'>
                            <div className='flex flex-row'>
                                <label for='email' className='w-1/3'>Alamat E-mail</label>
                                <input onChange={handleChange} defaultValue={input.email} type={'email'} className='mb-3.5 border border-silver rounded w-2/3 p-1 pl-2' placeholder='Masukkan Alamat E-Mail'></input>
                            </div>
                            <div className='flex flex-row'>
                                <label for='password' className='w-1/3'>Sandi</label>
                                <input onChange={handleChange} defaultValue={input.password} type={'password'} className='mb-3.5 border border-silver rounded w-2/3 p-1 pl-2' placeholder='Masukkan Sandi'></input>
                            </div>
                            <div className='grid place-items-center'>
                                <div>
                                    <input type='checkbox' className='accent-silver bg-silver border border-black'></input>
                                    <label for='checkbox' className='ml-2'>Ingat Akun Saya</label>
                                </div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div></div>
                                <button class="h-9 px-10 m-2 bg-blue hover:bg-black rounded-lg text-white place-item-start">Masuk</button>
                                <a href="register" className=" text-blue text-center p-3 hover:underline">Lupa Sandi?</a>
                            </div>
                        </form>
                    </div >
                </div >
            </body >
        </>
    )
}

export default Login
