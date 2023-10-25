import { useState, useSyncExternalStore } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Vhod from './components/button/Vhod.jsx'
import Poisk from './components/button/Poisk.jsx'

function App() {

  return (
    <>
      <Header />
      <Vhod />
      <Poisk />
    </>
  )
}

export default App
