import React, { useState } from 'react'
import { HashLink } from "react-router-hash-link";
import { navbar } from "../../common/data";
import logo from '../../common/images/hipster-white.png'
import {AiOutlineMenu} from 'react-icons/ai'
import './navbar.scss';
import Sidebar from "../Sidebar/Sidebar";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isSidebarOpen,setSidebarOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="links">
        {navbar.map((nav) =>{
          const {id,name,route} = nav;
          return <Link to={route} key={id}smooth >{name}</Link>
        })}
      </div>
      <div className="menu-icon">
        <AiOutlineMenu onClick={() => setSidebarOpen(true)}/>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
    </div>
  );
};

export default Navbar;
