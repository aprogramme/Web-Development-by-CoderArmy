import { useState } from "react"


function Counter({count, setCount}) {

    return (
        <>
         <h1>Couter is {count}</h1>
         <button onClick={() => setCount(count+1)}>Increment</button>
         <button onClick={() => setCount(count-1)}>Decrement</button>
        </>
    )
}

export default Counter;