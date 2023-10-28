import { useState, useSyncExternalStore } from 'react'
import Logo from './components/link/Logo.jsx'
import './Reg.css'
import Input from './LoginComponents/inputs/Input'
import Button from './LoginComponents/button/ButtonYellow.jsx'

function Reg() {
  return ( <>
  <div className='Login_item'>
      <Logo />
      <h1 id='title_vhod'>Зарегистрироваться</h1>
      <div className="inptu">
        <Input placeholder={'Имя'} type={'text'} />
        <Input placeholder={'Фамилия'} type={'text'} />
        <Input placeholder={'Придумайте логин'} type={'text'} />
        <Input placeholder={'Придумайте пароль'} type={'password'} />
        <Input placeholder={'Повторите пароль'} type={'password'} />
        <Input placeholder={'Номер телефона или e-mail'} type={'tel'} />
        <Button text={'Зарегистрироваться'}/>
      </div>
    </div>

  </>
    
  )
}

export default Reg