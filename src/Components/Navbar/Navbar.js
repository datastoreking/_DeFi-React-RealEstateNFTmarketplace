import React from 'react'
import Logo from '../Images/SRG logo.png'
import UserIcon from '../Images/User icon.svg'
import WalletIcon from '../Images/Wallet icon.svg'
import SRGCoin from '../Images/SRG coin.png'
import SearchIcon from '../Images/Search icon.svg'

const Navbar = ({ sidebar, set, setShowModal, walletProvider}) => {

  const openSidebar = ()=>{
    set(!sidebar)
  }

  return (
    <div className="navbar">
      <img src={Logo} className="logo-icon" alt={Logo}/>
      <label htmlFor="search" className="search-box-container">
        <input type="text" placeholder="Search items, collections and accounts" className="search-box" />
        <img src={SearchIcon} className="search-icon" alt="search icon" />
      </label>
      <div className="user-bar">
        <img src={UserIcon} className="user-icon" alt="user icon"/>
        <img src={WalletIcon} className="wallet-icon" alt="wallet icon"/>
        <button className="swap-btn">
          <img src={SRGCoin} alt="SRGCoin" />
          <span>Swap</span>
        </button>
      </div>
      <div
        className={sidebar ? "hamburger toggle" : "hamburger"}
        onClick={openSidebar}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  )
}

export default Navbar