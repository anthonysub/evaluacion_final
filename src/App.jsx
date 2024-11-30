import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((prevCount) => (prevCount < 25 ? prevCount + 1 : prevCount))
  }

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > -25 ? prevCount - 1 : prevCount))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCount}>
          Incremento
        </button>
        <button onClick={decrementCount}>
          Decremento
        </button>
        <p className= "numero">
         Numero de: {count}
        </p>
        <p>
          Anthony Oskar Gerardy Sub Coy
        </p>
        <p>
          ID:000149413
        </p>
      </div>
     
    </>
  )
}

export default App