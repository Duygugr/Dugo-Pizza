import React from 'react'
import "../css/İletişim.css"
import Header from '../components/Header'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import Footer from '../components/Footer';




function İletişim() {
    return (
        <div className='contact-page'>
            <Header />
           
            <div className="form-container">
                <div className="contact">
                    <div className="contact-font">
                    <p style={{ color: "#ff6b00", fontWeight: "900", marginBottom: "10px" }}>İLETİŞİM</p>
                    <h2 >Bizimle iletişime</h2>
                    <h2 style={{ color: "#ff6b00" }}> Geçin!</h2>
                    <p style={{ width: "300px", marginTop: "10px", fontSize: "16px" }}>Sorularınız, önerileriniz veya siparişleriniz için her zaman bize ulaşabilirsiniz.
                        Size en kısa sürede dönüş yapacağız.
                    </p>
            </div>  

                    <div className="contact-container">
                        <div className="contact-box">
                            <FaPhoneAlt className='contact-icon' />
                            <div className="contact-info">
                                <h3>Telefon</h3>
                                <p>0555 555 55 55</p>
                            </div>
                        </div>

                        <div className="contact-box">
                            <IoMdMail className='contact-icon' />
                            <div className="contact-info">
                                <h3>E-posta</h3>
                                <p>dugopizza@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-box">
                            <FaLocationDot className='contact-icon' />
                            <div className="contact-info">
                                <h3>Adres</h3>
                                <p>Moda Caddesi No: 42/A
                                    Caferağa <br /> Kadıköy / İstanbul</p>
                            </div>
                        </div>

                        <div className="contact-box">
                            <FiClock className='contact-icon' />
                            <div className="contact-info">
                                <h3>Çalışma Saatleri</h3>
                                <p>Her gün 11.00 - 23.00</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="form">
                    <h1 style={{color:"#ff6b00" , fontSize:"38px"}}>Bize mesaj gönderin</h1>
                    <p style={{marginTop:"6px"}}>Formu doldurun, size geriş dönüş yapalım</p>

                    <form >
                        <div className="form-box">
                            <div className="input-box">
                                <FaUserAlt className="form-icon" />
                                <input type="text" id="name" placeholder="Adınız Soyadınız" />
                            </div>

                            <div className="input-box">
                                <IoMdMail  className="form-icon" />
                                <input type="email" id="e-mail" placeholder="E posta Adresiniz" />
                            </div>

                            <div style={{width:"100%"}} className="input-box">
                                <FaPhoneAlt className="form-icon" />
                                <input type="tel" id="tel" placeholder="Telefon Numaranız" />
                            </div>

                            <div className="input-box">
                                <BiEditAlt style={{position:"absolute" , top:"20%"}} className="form-icon" />
                                <textarea placeholder="Mesajınız" rows="5"></textarea>
                            </div>
                        </div>

                        <button className='form-btn'>Gönder</button>
                    </form>

                </div>
            </div>

            <Footer />
        </div>


    )
}

export default İletişim
