import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/main'
import Footer from './components/Footer/Footer'

function App() {
  const [x1, setx1] = useState("START VALUE");
  return (
    <>
      <Header setx1={setx1}/>
      <Main x1={x1}/>
      <Footer setx1={setx1} x1={x1}/>
      {/* <h3>Esto está en APP</h3> */}
    </>
  )
}

export default App
