import { createContext, useState } from 'react'
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

export const ProductContext = createContext();

export const PriceContext = createContext();

function App() {

  const [cartItem, setCartItem] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <>
    <PriceContext value={{price, setPrice}}>
      <ProductContext value={{cartItem, setCartItem}}>
        <Header  />
        <Body />
        <Footer />
      </ProductContext>
    </PriceContext>
    </>
  )
}

export default App
