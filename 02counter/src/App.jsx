import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState returns 2 values in Array form []
  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("Clicked", counter)

    // if we use this 1 or more time still the counter will Increment only 1 times.
    // setCounter(counter + 1)
    // console.log("1st increment", counter)
    // setCounter(counter + 1)
    // console.log("2nd increment", counter)
    // setCounter(counter + 1)
    // console.log("3rd increment", counter)
    // setCounter(counter + 1)
    // console.log("4th increment", counter)

    //  if we use Callback Function like this then counter will update as many
    // times as we write it. Here it will Increment from 15 to 19 in just 1 click.
    
    // when we pass a Callback Function in setCounter, it accepts previous Counter
    // value then we increment this value and update Counter.
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
