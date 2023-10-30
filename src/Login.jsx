import { useState, useSyncExternalStore } from 'react'
import './Login.css'
import TitleLog from './LoginComponents/title/TitleLog'
import Input from './LoginComponents/inputs/Input'
import Logo from './components/link/Logo.jsx'
import Button from './LoginComponents/button/ButtonYellow.jsx'
import ButtonCollor from './LoginComponents/button/ButtonCollor.jsx'
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  return (
    <div className='Login_item'>
      <Logo />
      <TitleLog />
      <div className="inptu">
        <Input placeholder={'Логин, почта или телефон'} type={'text'} />
        <Input placeholder={'Ваш пароль'} type={'password'} />
        <Button text={'Вход'}/>
        <div onClick={() => navigate("/Reg")}><ButtonCollor text={'Зарегистрироваться'} /></div>
      </div>
      <Link id='link_vhod' to='/Vost'>Восстановить пароль</Link>
    </div>
  )
}

export default Login