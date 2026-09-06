import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/BasketSlice";
import { useState } from "react";

function Product({pizza}) {

        const dispatch = useDispatch()

        const handleAddToBasket = () =>{
            dispatch(addToBasket(pizza))
            setAdded(true)

            setTimeout(()=>{
                setAdded(false)
            },1500)
        }

        const [added, setAdded] = useState(false)


  return (

        <div className='products'>
            
            <img style={{width:"200px" , height:"200px"}} src={pizza.image} />
            <h2 >{pizza.name}</h2>
            <p style={{fontSize:"14px" , color:"rgba(66, 66, 66, 0.95)" , width:"200px",
            height:"50px" 
            }}>{pizza.ingredients}</p>
            <div className='product-info'>
                <p style={{fontSize:"20px" , fontWeight:"bolder"}} className='price'>₺{pizza.price}</p>
                <IoIosAddCircle
                 className={added ? "product-icon added" : "product-icon"}
                 style={{}} 
                onClick={() => {handleAddToBasket(pizza)}}/>
            </div>
        </div>
    

  )
}

export default Product
