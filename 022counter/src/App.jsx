import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)
  // let counter = 15

  const addValue = () => {
    if(counter < 20){
    setCounter(counter + 1)
    } else {
      setCounter(20)
    }
    console.log(counter)
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    } else {
      setCounter(0)
    }
    console.log(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter}</button>

      <br />

      <button
      onClick={removeValue}
      >Remove Value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
