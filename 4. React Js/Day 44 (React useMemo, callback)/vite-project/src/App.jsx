import { use, useCallback, useMemo, useState } from 'react'
import './App.css'
import Sum from './Sum'
import Post from './Post'

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100000);

  // function Prime() {
  //   let total = 0;

  //   if(number>1) 
  //     total++;

  //   for(let i=3; i<=number; i++) {
  //     total++;
  //     for(let j=2; j<i; j++) {
  //       if(i%j == 0) {
  //         total--;
  //         break;
  //       }
  //     }
  //   }

  //   return total;
  // }


  // useMemo : to memoize the Prime function previous result
  const prime = useMemo(() => {
    let total = 0;

    if(number>1) 
      total++;

    for(let i=3; i<=number; i++) {
      total++;
      for(let j=2; j<i; j++) {
        if(i%j == 0) {
          total--;
          break;
        }
      }
    }

    return total;
  },[number])

  // this function rendered every time App component rendered although it's not dependent on any state or props
  // function handleClick() {
  //   console.log("Hello");
  // }
  

  const handleClick = useCallback(() => {
    console.log("hello world", count);
  },[count])

  const obj = useMemo(() => {
    return {name:"Aayush", age:20}
  },[])

  console.log("App rendered");

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <h2>Current Number: {number}</h2>
      <button onClick={() => setNumber(number+10)}>Increment Number</button>
      <h3>Total Prime Number: {prime}</h3>
      <button onClick={handleClick}>Click </button>
      <Sum number={number} />

      {/* <Post value={{name:"Aayush", age:20}} />  */}
      <Post value={obj} /> 
    </>
  )
}
 
export default App
