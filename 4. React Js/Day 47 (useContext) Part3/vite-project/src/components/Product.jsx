import { useState, useContext } from "react";
import { ProductContext, PriceContext } from "../App";

function Product({item}) {

    const [addToCart, setAddToCart] = useState(false);
    const {cartItem, setCartItem} = useContext(ProductContext);
    const {price, setPrice} = useContext(PriceContext);

    return(
        <div>
            <h1>Name: {item.name}</h1>
            <h1>Price: {item.price}</h1>
            {
                addToCart ? <button onClick={()=> {setAddToCart(false), setCartItem(cartItem=>cartItem-1), setPrice(price=>price-item.price)}}>Remove</button> : <button onClick={()=> {setAddToCart(true), setCartItem(cartItem=>cartItem+1), setPrice(price=>price+item.price)}}>Add</button>
            }
        </div>
    )
}

export default Product;