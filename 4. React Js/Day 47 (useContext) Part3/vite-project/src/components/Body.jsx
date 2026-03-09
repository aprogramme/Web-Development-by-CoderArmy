import { useState } from "react";
import Product from "./Product";

function Body() {

    const [items, setItems] = useState([
        {id: 1, name: "Apple", price: 100},
        {id: 2, name: "Banana", price: 80},
        {id: 3, name: "Orange", price: 200},
        {id: 4, name: "Almond", price: 800},
        {id: 5, name: "Coconut", price: 70},
        
    ])

    return (
        <>
         <h1>I am the Blinkit body</h1>
         <div style={{display:"flex", gap:"50px" }}>
            {
                items.map((item)=> <Product key={item.id} item={item}></Product>)
            }
         </div>
        </>
    )

}

export default Body;