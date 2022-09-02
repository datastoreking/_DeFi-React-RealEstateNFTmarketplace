import React from 'react';
import Logo from '../assets/img/SRG logo/SRG logo.png'

const Navbar = () => {
    return(
        <div className="w-full shadow-lg h-20">
            <img src={Logo} alt="logo" className="absolute top-3.5 left-8" />
            <input type="text" className="absolute left-[477px] top-3.5 border border-slate-400 w-2/5 h-11 rounded-lg" placeholder="Search items, collections and accounts"/>

        </div>
    )
}

export default Navbar