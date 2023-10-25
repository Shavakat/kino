import { useState, useSyncExternalStore } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Vhod from './components/button/Vhod.jsx'
import Poisk from './components/button/Poisk.jsx'
import Logo from './components/link/Logo'

function App() {

  return (
    <>
      <Header />
      <Vhod />
      <Poisk />
      <Logo />
    </>
  )
}

export default App
