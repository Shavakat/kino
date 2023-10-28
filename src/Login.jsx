import { useState, useSyncExternalStore } from 'react'
import './Login.css'
import TitleLog from './LoginComponents/title/TitleLog'
import Input from './LoginComponents/inputs/Input'
import Logo from './components/link/Logo.jsx'


function Login() {

  return (
    <div className='Login_item'>
      <Logo />
      <TitleLog />
      <div className="inptu">
        <Input placeholder={'Логин, почта или телефон'} type={'text'} />
        <Input placeholder={'Ваш пароль'} type={'password'} />
      </div>
    </div>
  )
}

export default Login