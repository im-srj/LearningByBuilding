import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [Password, setPassword] = useState("")

  const handleGeneratePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbers) str += "0123456789"
    if (symbols) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)

  }, [length, numbers, symbols, setPassword])


  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-white ">
        <div className="flex shdow rounded=-lg overflow-hidden mb-4">
          <input type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Your Password"
            readOnly
          />
        </div>
      </div>
    </>
  )
}

export default App
