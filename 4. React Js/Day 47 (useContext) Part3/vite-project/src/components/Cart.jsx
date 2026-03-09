import { useContext } from "react";
import { ProductContext, PriceContext } from "../App";

function Cart() {

    const {cartItem} = useContext(ProductContext);
    const {price} = useContext(PriceContext);
    return (
        <>
           <h1>Total item: {cartItem}</h1>
           <h1>Total Price: {price}</h1>
        </>
    )
}

export default Cart;