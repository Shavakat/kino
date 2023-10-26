import { useState, useSyncExternalStore } from 'react'
import './App.css'
import Header from './Header'
import Header2 from './Header2'
import Card from './components/card/Card'

function App() {

  return (
    <>
      <Header />
      <Header2 />
      <div className="all_card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </>
  )
}

export default App
