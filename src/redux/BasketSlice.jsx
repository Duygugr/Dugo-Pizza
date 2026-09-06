import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products : []
}

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket : (state,action) =>{
        const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
    );

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        state.products.push({
            ...action.payload,
            quantity: 1
        });
    }
    },

    increaseQuantity: (state,action) => {
      const product = state.products.find(
        product => product.id === action.payload
      )

      if(product){
        product.quantity +=1
      }
    },

    decreaseQuantity: (state,action) =>{
        const product = state.products.find(
          product => product.id === action.payload
        )

        if(product && product.quantity >1){
          product.quantity -= 1
        }
    }
,
    removeFromBasket: (state,action) => {
      state.products = state.products.filter(
        (product) => product.id !==action.payload
      )
    }

  }

  

});

export const {addToBasket , increaseQuantity , decreaseQuantity , removeFromBasket} = BasketSlice.actions

export default BasketSlice.reducer