import { useState, useSyncExternalStore } from 'react'
import './Login.css'
import TitleLog from './LoginComponents/title/TitleLog'
import Input from './LoginComponents/inputs/Input'
import Logo from './components/link/Logo.jsx'
import Button from './LoginComponents/button/ButtonYellow.jsx'
import ButtonCollor from './LoginComponents/button/ButtonCollor.jsx'
import { NavLink } from 'react-router-dom'


function Login() {

  return (
    <div className='Login_item'>
      <Logo />
      <TitleLog />
      <div className="inptu">
        <Input placeholder={'Логин, почта или телефон'} type={'text'} />
        <Input placeholder={'Ваш пароль'} type={'password'} />
        <Button text={'Вход'}/>
        <ButtonCollor text={'Зарегистрироваться'}/>
      </div>
      
    </div>
  )
}

export default Login