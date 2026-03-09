import { useContext, useState } from "react";
import { CounterContext } from "../App";


function Counter() {

    const {count, setCount} = useContext(CounterContext);

    return (
        <>
         <h1>Couter is {count}</h1>
         <button onClick={() => setCount(count+1)}>Increment</button>
         <button onClick={() => setCount(count-1)}>Decrement</button>
        </>
    )
}

export default Counter;