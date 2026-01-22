import Food from "./Food";

import { useState } from "react";


function List() {
    const [foodItems, setFoodItems] = useState(["Apple", "Banana", "Orange"]);

    function handleChange() {
        setFoodItems(["Mango",...foodItems]);
    }

    return (
        <>
        <button onClick={handleChange}>Increase</button>
        <Food foods={foodItems}/>
        </>
    )
}

export default List; 