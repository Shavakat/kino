import { useState, useSyncExternalStore } from 'react'
import Vhod from './components/button/Vhod.jsx'
import Poisk from './components/button/Poisk.jsx'
import Logo from './components/link/Logo.jsx'
import Nav from './components/nav/Nav.jsx'
import './Header.css'

function Header() {

  return (
    <>
      <header>
        <div className="header_logo">
          <Logo />
        </div>
        <div className="header_nav">
          <Nav />
        </div>
        <div className="header_but">
          <Poisk />
          <Vhod />
        </div>
      </header>
    </>
  )
}

export default Header
