import React from 'react'
import logo from "../assets/Logo (3).png"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import masterCard from "../assets/images__2_-removebg-preview.png"
import troy from "../assets/Troy_logo.png"
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <img  style={{width:"200px" ,  position:"absolute" , marginTop:"17px"}}src={logo} />
        <p style={{width:"250px" }}>Enfes pizzalar, hızlı teslimat ve müşteri memnuniyeti için burdayız.Lezzet bizim işimiz!</p>
            <div className='footer-icons'>
                <RiInstagramFill />
                <RiWhatsappFill />
                <FaSquareXTwitter />
            </div>

      </div>

      <div className="footer-links">
        <h3>Hızlı Linkler</h3>
          <li><Link to="/home"> Ana sayfa</Link></li>
        <li><Link to="/hakkimizda"> Hakkımızda</Link></li>
        <li><Link to="/ürünler"> Ürünler</Link></li>
        <li><Link to="/iletişim"> İletişim</Link></li>
      </div>

      <div className="footer-right">
        <h3>Bize Ulaşın</h3>
        <p><FaPhoneAlt className='footer-icon'/> 0555 555 55 55 </p>
        <p><IoMdMail className='footer-icon'/> dugopizza@gmail.com</p>
        <p><FaLocationDot className='footer-icon'/>Moda Caddesi No: 42/A <br/>
                Caferağa, Kadıköy / İstanbul </p>
        <p></p>
      </div>

        <div className='copyright'>
        <p >© 2026 Dugo Pizza. Tüm hakları saklıdır.</p>
        <div className='copyright-icons'>
          <RiVisaLine style={{width:"50px" , height:"50px", marginTop:"5px"}} />
          <img style={{width:"40px" , height:"30px" , marginTop:"14px"}} src= {masterCard}/>
          <img style={{width:"40px" , height:"30px" , marginTop:"14px"}} src={troy}/>
        </div>
</div>
    </div>
  )
}

export default Footer

