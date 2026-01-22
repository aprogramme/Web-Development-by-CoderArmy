import { useRef, useState } from 'react'

// stopwatch: start, stop, reset
function App() {

  const [time, setTime] = useState(0);
  const intervalIdRef = useRef(null);  // to store interval ID, created only once

  function handleStart() {
    if(intervalIdRef.current != null) {
      return; // already running
    }
    intervalIdRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  function handleReset() {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
    setTime(0);
  }

  return (
    <>
    <h1>Stopwatch: {time}</h1>
    <div>
      <button onClick={handleStart }>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
      
    </>
  )
}

export default App
