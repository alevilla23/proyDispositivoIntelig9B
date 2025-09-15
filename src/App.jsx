import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //aqui va javascript
  let x1 = "Smart Devices Development";
  return (
    //aqui va el codigo html
    <>
      <h1>Hello World from React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nostrum, dolor iure temporibus reiciendis accusantium quia ea et. Voluptatum, earum ut velit commodi aliquid amet ex blanditiis est eligendi dolor?</p>
      <p>{x1}</p>
    </>
  )
}

export default App
