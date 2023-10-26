import { useState, useSyncExternalStore } from 'react'
import './App.css'
import Header from './Header'
import Glava from './components/glava/Glava'
import Line from './components/line/Line'

function App() {

  return (
    <>
      <Header />
      <Glava />
      <Line />
    </>
  )
}

export default App
