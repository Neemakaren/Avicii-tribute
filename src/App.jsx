import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [message, setMessage] = useState([])

  useEffect(()=> {
    fetch('messages.json').then(res => res.json()).then(data => {
      // console.log(data)
      setMessage(data)
    });
  }, [])

  return (
    <>
     <Home message={message}/>
    </>
  )
}

export default App
