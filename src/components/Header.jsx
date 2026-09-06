import React, { useState } from 'react'
import "../css/Home.css"
import logo from "../assets/Logo (3).png"
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";



function Header() {

    const [menuOpen , setMenuOpen] = useState(false)

  return (
    <div className='header-container'>
        <div className="header">
            <img className='logo' src= {logo} />
            <nav className={menuOpen ? "nav-container active" : "nav-container"}>
                <ul className='nav-list'>
                    <li><Link to="/"> Ana sayfa</Link></li>
                    <li><Link to="/hakkimizda"> Hakkımızda</Link></li>
                    <li><Link to="/ürünler"> Ürünler</Link></li>
                    <li><Link to="/iletişim"> İletişim</Link></li>      
                </ul>   
                <button className='order'  ><Link to="/sepet">Sipariş ver</Link> </button>
            </nav>

            

            <div style={{fontSize:"25px" }} className='hamburger' onClick={() => {
                setMenuOpen(!menuOpen)
            }}> <RxHamburgerMenu />  </div>

        </div>


    </div>
  )
}

export default Header
