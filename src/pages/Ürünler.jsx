import React from 'react'
import Header from '../components/Header'
import "../css/Ürünler.css"
import pizzas from"../Pizzas"
import Footer from '../components/Footer';
import Product from '../components/Product';

function Ürünler() {



  return (
    <div className='products-pages'>
          <Header />
     <h1>ÜRÜNLER</h1>
    <div className="pizza-container">
                  {pizzas.map((pizza) => (
                    <div className="pizza">
                    <Product
                        key={pizza.id}
                        pizza={pizza}
                        
                    />
                    </div>
                ))}


        </div>
    
    <Footer />


    </div>
  )
}

export default Ürünler
