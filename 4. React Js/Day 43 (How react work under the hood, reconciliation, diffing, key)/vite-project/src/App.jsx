import { useState } from "react"


function App() {

  const [count, setCount] = useState(0);

  return (
    <>
    <p>This is the counter for react App</p>
    <h1>Counter: {count}</h1>
    <button onClick={() =>setCount(count+1)}>Increase</button>
    <button onClick={() =>setCount(count-1)}>Decrease</button>
    
    </>
  )
}

export default App;