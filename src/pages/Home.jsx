import React from 'react'
import Header from '../components/Header'
import Features from '../components/Features'
import pizzas from "../Pizzas"
import { IoIosAddCircle } from "react-icons/io";
import Kampanya1 from "../assets/kampanya1.png"
import Kampanya2 from "../assets/kampanya2.png"
import Footer from '../components/Footer'
import { FaArrowRight } from "react-icons/fa";
import img from "../assets/banner.jpeg"
import { useDispatch } from 'react-redux'
import {addToBasket} from "../redux/BasketSlice"
import { useState } from 'react';




function Home(){
        const populerPizzas = pizzas.slice(0,4)

        const dispatch = useDispatch()

      const [added, setAdded] = useState(false)

            const handleAddToBasket = (pizza) => {
              dispatch(addToBasket(pizza));           
              setAdded(pizza.id)
            setTimeout(()=>{
                setAdded(null)
            },1500)
            
          }

        

  return (
    <div>
      <Header />
              <div className='banner-text'>
                  <i><p style={{color:"#ff6b00" , fontFamily:"Dancing Script" , fontSize:"30px" ,marginBottom:"10px"}}>Sıcak,Taze,Nefis </p></i>
                  <h1>ENFES PİZZALAR </h1>
                  <h1 style={{color:"#ff6b00"}}>KAPINDA!</h1>
                  <i><p className='banner-info' >Taptaze malzemelerle hazırlanmış<br />
                      pizzalarımızla lezzetin keyfini çıkarın.
                  </p></i>
                  <button  style={{width:"190px", height:"45px" , display:"flex" , gap:"14px" , justifyContent:"center" , alignItems:"center" , marginTop:"22px"}} className='order'>Sipariş ver <FaArrowRight />
                  </button>
              </div>
      
              <img  className='banner' src={img} />
              
      <Features/>

      <h2 style={{marginLeft:"62px" , fontSize:"35px" , marginBottom:"30px" , fontWeight:"900"}}>POPÜLER PİZZALAR</h2>
      
      <div className="pizza-container">
    {populerPizzas.map((pizza) => (
        <div className="pizza">
            <div key={pizza.key}>
                <img src={pizza.image} />
                <h2>{pizza.name}</h2>

                <p style={{fontSize:"14px" , color:"rgba(66, 66, 66, 0.95)" , width:"200px" }}>
                    {pizza.ingredients}
                </p>

                <div className='product-info'>
                    <p className='price'>₺{pizza.price}</p>

                    <IoIosAddCircle
                className={added===pizza.id ? "product-icon added" : "product-icon"}
              onClick={() => handleAddToBasket(pizza)}
                  />
                </div>
            </div>
        </div>
    ))}
</div>

      <button className='allPizzas'>Tümünü gör</button>
    
      <div className='campaigns'>
        <h1 style={{ paddingTop:"50px", width:"100%" , color:"white"}}>Özel Kampanyalar</h1>
        <div className='campaign'>
          <img src={Kampanya1}/>
          <p> 1 Büyük Boy Pizza  <br />
          + 2 Sos <br />
          + Büyük Boy İçeçek </p>
          <h4> ₺250</h4>
        </div>

        <div className='campaign'>
          <img src={Kampanya2}/>
          <p> 2 Orta Boy Pizza 
          <br />
          + 1L İçecek </p>
          <h4> ₺400</h4>
        </div>
      </div>

      <Footer/>
      </div>
    
  )
}

export default Home
