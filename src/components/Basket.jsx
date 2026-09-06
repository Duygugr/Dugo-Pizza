import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Header from './Header';
import "../css/Basket.css"
import { increaseQuantity, removeFromBasket } from '../redux/BasketSlice';
import { decreaseQuantity } from '../redux/BasketSlice';
import { MdDeleteForever } from "react-icons/md";




function Basket() {
    const products = useSelector((state) => state.basket.products)

    const dispatch = useDispatch()

    const deleteProducts = (id) =>{
      dispatch(removeFromBasket(id))
    }

    const totalPrice = products.reduce( 
      (total,product) => total + product.price * product.quantity,
      0
    )



  return (
    <div className='basket-page'>

      <Header/>
    <h1 style={{paddingBottom:"20px"}}>Sepetim</h1>

    <div  className="basket-container">

    {products.map((product) =>(
        <div key={product.id}>
          <div className="product-container">
            <img  style={{width:"90px"}} src={product.image} />
            <div className="product-info">
            <h3 style={{marginLeft:"30px" , marginRight:"13%" , width:"100px"  ,whiteSpace:"nowrap"}}>{product.name}</h3>
            <div className="count">
              <p><FaMinus className='quantity' onClick={() => dispatch(decreaseQuantity(product.id))}/> 
              <span className='quantity-number' >{product.quantity} </span>
              <FaPlus className='quantity' onClick={() => dispatch(increaseQuantity(product.id))}/></p>
            </div>
            <p style={{marginLeft:"15%" , fontWeight:"bolder" , whiteSpace:"nowrap"} }>{product.price} TL</p>
            <MdDeleteForever 
            onClick={() => {deleteProducts(product.id)}}
             style={{fontSize:"22px"  , marginTop:"-30px" ,  flexShrink: 0}}  />

            </div>
          </div>
        </div>
    ))}
</div>
    <div className="total">
      <h2>Toplam:</h2>
      <div className="total-row1">
        <p>Ara toplam   </p>
        <p>{totalPrice} TL</p>
      </div>

      <div className="total-row">
        <p>Teslimat ücreti  </p>
        <p>50 TL</p>
      </div>

      <hr style={{marginBottom:"15px" , marginTop:"10px"}}/>

      <div className="total-row">
        <p style={{fontSize:"19px"}}><b>Toplam </b></p>
        <p style={{fontSize:"19px"}}><b>{totalPrice+50} TL</b></p>
      </div>

      <button className='total-btn'>Sepeti Onayla</button>
    </div>
    
    </div>
  )
}

export default Basket
