import { useState, useSyncExternalStore } from 'react'
import Logo from './components/link/Logo.jsx'
import './VostPsw.css'
import Input from './LoginComponents/inputs/Input'
import Button from './LoginComponents/button/ButtonYellow.jsx'


function VostPsw() {
  return ( <>
  <div className='Login_item'>
      <Logo />
      <h1 id='title_vhod'>Восстановить пароль</h1>
      <div className="inptu">
        <Input placeholder={'Придумайте новый пароль'} type={'password'} />
        <Input placeholder={'Подтвердите новый пароль'} type={'password'} />
        <Button text={'Готово!'}/>
      </div>
    </div>

  </>
    
  )
}

export default VostPsw