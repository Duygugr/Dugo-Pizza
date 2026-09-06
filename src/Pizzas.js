import React from 'react'
import acılı from "./assets/pizzas/acili.png"
import barbeku from "./assets/pizzas/barbeku-tavuk.png"
import dortPeynirli from "./assets/pizzas/dort-peynirli.png"
import hawaii from "./assets/pizzas/hawaii.png"
import et from "./assets/pizzas/karisik-et.png"
import margherita from "./assets/pizzas/margherita.png"
import pepperoni from "./assets/pizzas/pepperoni.png"
import sebzeli from "./assets/pizzas/sebzeli.png"


const pizzas = [
  {
    id: 1,
    name: "Margherita",
    ingredients: "Domates sosu, mozzarella, fesleğen",
    price: 250,
    image: margherita
  },
  {
    id: 2,
    name: "Pepperoni",
    ingredients: "Domates sosu, mozzarella, pepperoni",
    price: 280,
    image: pepperoni
  },
  {
    id: 3,
    name: "Karışık Et",
    ingredients: "Domates sosu, mozzarella, sucuk, pepperoni, kavurma, dana jambon",
    price: 320,
    image: et    

  },
  {
    id: 4,
    name: "Dört Peynirli",
    ingredients: "Mozzarella, cheddar, parmesan, gorgonzola",
    price: 300,
    image: dortPeynirli
  },
  {
    id: 5,
    name: "Barbekü",
    ingredients: "Barbekü sosu, mozzarella, tavuk, mısır, kırmızı biber",
    price: 290,
    image: barbeku
  },
  {
    id: 6,
    name: "Acılı",
    ingredients: "Domates sosu, mozzarella, sucuk, jalapeno, acı biber",
    price: 280,
    image: acılı
  },
  {
    id: 7,
    name: "Hawaii",
    ingredients: "Domates sosu, mozzarella, sucuk, ananas",
    price: 290,
    image: hawaii
  },
  {
    id: 8,
    name: "Sebzeli",
    ingredients: "Domates sosu, mozzarella, mantar, mısır, biber, zeytin",
    price: 260,
    image: sebzeli
  }
]

export default pizzas