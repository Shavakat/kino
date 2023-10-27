import { useState, useSyncExternalStore } from 'react'
import './App.css'
import Header from './Header'
import Header2 from './Header2'
import Card from './components/card/Card'
import AllFilm from './components/button/AllFilm'
import TrailerTitle from './components/titleCont/TrailerTitle.jsx'

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
      </div>
      <div className="btn_all_film"><AllFilm /></div>
      <div className='TT_app'><TrailerTitle /></div>
    </>
  )
}

export default App
