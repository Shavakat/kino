import { useState, useSyncExternalStore } from 'react'
import Vhod from './button/Vhod.jsx'
import Poisk from './button/Poisk.jsx'
import Logo from './link/Logo'
import Nav from './nav/Nav'
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
