import { createContext, useState } from 'react'
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

export const CounterContext = createContext();

function App() {

  const [count, setCount] = useState(0); // state lifting

  return (
    <>
      <CounterContext value={{count, setCount}}>
        <Header  />
        <Body />
        <Footer />
      </CounterContext>
    </>
  )
}

export default App
