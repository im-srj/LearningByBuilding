import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(7)

  const addvalue = () => {
    setCounter(counter + 1)
  }
  const removevalue = () => {
    if (counter === 0) {
      return
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>CounterAPP</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addvalue}>Add Value</button>
      <br />
      <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
