import React from 'react';
import '../Styles/LogNavbar.css'
import Logo from '../assets/logoA.png'
import Profile from '../assets/User.png'
import Exit from '../assets/Logout.png'
const LogNavbar = () => {
    return (
        <nav class="bg-blue px-2 sm:px-4 py-2.5 font-nunito tracking-wide sticky top-0">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" class="flex items-center">
                    <img src={Logo} alt='logo bentol' className='w-36' />
                    <span class="self-center text-sm ml-8 whitespace-nowrap text-white">BERANDA</span>
                </a>
                <a href='/' className='absolute ml-64'>
                    <span className='self-center ml-8 text-sm text-white'>ARTIKEL</span>
                </a>
                <div className='flex'>
                    <a href="/" class="flex">
                        <img src={Profile} alt='logo bentol' className='w-8' />
                        <span class="self-center ml-2 text-sm whitespace-nowrap text-white">PROFIL</span>
                    </a>
                    <a href="/" class="ml-12 flex">
                        <img src={Exit} alt='logo bentol' className='w-8' />
                        <span class="self-center ml-2 text-sm whitespace-nowrap text-white">KELUAR</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default LogNavbar