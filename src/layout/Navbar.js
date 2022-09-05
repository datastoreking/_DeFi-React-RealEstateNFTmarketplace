import React from 'react';
import Logo from '../assets/img/Navbar/SRG logo.png'
import FiSearch from '../assets/img/Navbar/Search icon.svg'
import User from '../assets/img/Navbar/User icon.svg'
import WalletIcon from '../assets/img/Navbar/Wallet icon.svg'

const Navbar = () => {
    return(
        <div className="w-full flex items-center shadow-lg h-20 flex-row-reverse font-poppins">
            <img src={Logo} alt="logo" className="absolute top-3.5 left-8 cursor-pointer" />
            <label htmlFor="search" className="absolute left-[477px] top-4 w-2/5">
                <img src={FiSearch} className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" alt="searchIcon" />
                <input type="text" name="search" id="searchBox" placeholder="Search items, collections and accounts" className="border border-slate-400 w-full h-11 rounded-lg pl-10" />
            </label>
            <div className="flex items-center w-1/5 justify-center gap-10">
                <img src={User} className="cursor-pointer" alt="userIcon"/>
                <img src={WalletIcon} className="cursor-pointer" alt="walletIcon" />
                <button className="pl-8 pr-8 h-11 border rounded-lg border-slate-400">Swap</button>
            </div>
        </div>
    )
}

export default Navbar