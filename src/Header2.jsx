import { useState, useSyncExternalStore } from 'react'
import Glava from './components/glava/Glava'
import Line from './components/line/Line'
import Spisok from './components/nav/Spisok'
import './Header2.css'

function Header() {

  return (
    <>
      <div id="header_cont">      
        <div className="glava"><Glava /></div>
        <div className="line"><Line /></div>
        <div className="spisok"><Spisok /></div>
      </div>
    </>
  )
}

export default Header
