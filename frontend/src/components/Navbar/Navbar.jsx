import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]= useState("menu")

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    // <img src={assets.logo} alt="" className="logo" />
    
    <div className='navbar'>
    <Link to={"/"}><h1>Food <span className=' text-red-500'>Corner</span></h1> </Link>
    <ul className="navbar-menu">
    <li onClick={()=> setMenu("home")} className={menu === "home"?"active":""}>Home</li>
    <li onClick={()=> setMenu("menu")} className={menu === "menu"?"active":""}>Menu</li>
    <li onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile-app</li>
    <li onClick={()=> setMenu("contact")} className={menu === "contact"?"active":""}>Contact Us</li>
    </ul>
    <div className="navbar-right ">
        <img src={assets.search_icon} alt="" />
        
        <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar
