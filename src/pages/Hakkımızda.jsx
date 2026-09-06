import React from 'react'
import Header from '../components/Header'
import hakkımızda from "../assets/banner-hakkımızda.png"
import pizzaDough from "../assets/pizza dough.jpg"
import "../css/Hakkımızda.css"
import { FaLeaf } from "react-icons/fa";
import Features from '../components/Features'
import ingreadients from "../assets/ingredients.jpg"
import Footer from '../components/Footer'


function Hakkımızda() {
  return (
    <div>
      <Header />

      <div className='about-container'>
        <img  className= "about-banner" src= {hakkımızda}  />

        <div className="about-info">
          <p style={{color :'#ff6b00' , fontSize:"25px"}}>Hakkımızda</p>
          <h2>Biz Kimiz ?</h2>
          <hr style={{width:"120px", marginBottom:"18px" , border:"1px solid #ff6a00a6"}}/>
          <p className='about-text'>Dugo Pizza , 2020 yılında tutku , lezzet ve kalite anlayışıyla yola çıkan bir pizza 
            markasıdır. Amacımız en iyi malzemelerle , usta dokunuşlarla ve sevgiyle hazırlanmış 
            pizzaları sizinle buluşturmak.
          </p>
          <p style={{fontFamily:"Dancing Script", marginTop:"30px" ,color :'#ff6b00'}}>Dugo Pizza Ailesi </p>
        </div>


      <div className="story">
        <img src= {pizzaDough}  />
        <div className="story-info">
          <p style={{color :'#ff6b00' , marginBottom:"8px" , fontWeight:"800"}}>HİKAYEMİZ</p>
          <h3 style={{fontSize:"35px" , fontWeight:"800"}}>Bir tutku ile başladı,</h3>
          <h3 style={{fontSize:"35px" , color :'#ff6b00' ,fontWeight:"800"}}>bir lezzet yolculuğuna dönüştü.</h3>
          <p style={{ fontSize:"17px", width:"70%" , marginTop:"10px" , fontWeight:"600" , lineHeight:"31px"}}>Dugo Pizza, küçük bir hayalin büyük bir lezzet yolculuğuna dönüşmesiyle
            kuruldu. İtalyan pizza kültüründen ilham alarak, yerel ve taze malzemeleri
            kendi tariflerimizle buluşturuyoruz. </p>
          <p style={{ fontSize:"17px" ,width:"70%" ,fontWeight:"600" , lineHeight:"29px" ,marginTop:"10px"}}> Her hamurunda sabır , her sosumuzda özen, her pizzamızda ise paylaşmanın mutluluğu var.</p>
        </div>
      </div>

      <Features></Features>



    <div className='about-ingredients'>
      <img style={{ width: "92%" , height:"350px" , borderRadius:"12px" }} src= {ingreadients}  />
      <div className='ingredients-info'>
        <h2 >En iyi malzemeler,</h2>
        <h2 style={{color:"#ff6b00"}}>en iyi pizzalar.</h2>
        <p style={{lineHeight:"25px" , marginTop:"10px"}}>Pizzalarımızda kullandığımız tüm malzemeler özenle seçilir.<br/>
          Doğal, taze ve kaliteli içeriklerle sağlıklı ve lezzetli pizzalar  <br />hazırlıyoruz.
        </p>
        <div className="ingredients-box">
          <div className='box'> Taze Sebzeler</div>
          <div className='box'> Özel Soslar</div>
          <div className='box'> Doğal Peynir</div>
          <div className='box'> Taş Fırın Lezzeti</div>
        </div>
      </div>
    </div>

    <Footer />

      </div>
    </div>
  )
}

export default Hakkımızda
