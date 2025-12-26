// function App() {

//   let count = 0;

//   function increaseNumber() {
//     count++;
//     const para = document.querySelector('p');
//     para.textContent = `Counter: ${count}`;
//     const button = document.querySelector('button');
//     button.textContent = `Increment: ${count}`;
//   }

//   return (
//     <>
//     <p>Counter : {count}</p>
//     <button onClick={increaseNumber}>Increment {count}</button>
//     </>
//   )
// }

// export default App;

// -------------------------------------------------------------------

import { useState } from 'react';

// useState --> count = 0 --> return setCount
// setCount count ki value ko update kr sakte ho, and App function ko re-render kr sakte ho

function App() {

  let [count, setCount] = useState(0);

  function increaseNumber() {
    count++;
    setCount(count);
  }

  return (
    <>
    <p>Counter : {count}</p>
    <button onClick={increaseNumber}>Increment {count}</button>
    </>
  )
}

export default App;