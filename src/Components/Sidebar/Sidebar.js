import React from 'react'
import {NavLink} from 'react-router-dom'
import SidebarData from './SidebarData'

const Sidebar = ({sidebar, set}) => {
  return (
    <div className={sidebar ? "sidebar open" : "sidebar" }>
      <button className="create-btn">Create</button>
      <div className="menu">
        {SidebarData.map((val, ind)=>{
          return(
            <div key={ind}> <NavLink activeclassName="active" to={val.path} onClick={()=>set(!sidebar)}><img alt='' src={val.menuIcon}/><span>{val.name}</span></NavLink></div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar