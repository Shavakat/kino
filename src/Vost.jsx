import { useState, useSyncExternalStore } from 'react'
import Logo from './components/link/Logo.jsx'
import './Vost.css'
import Input from './LoginComponents/inputs/Input'
import InputMin from './LoginComponents/inputs/InputMin'
import Button from './LoginComponents/button/ButtonYellow.jsx'
import ButtonMin from './LoginComponents/button/ButtonMin.jsx'

function Vost() {
  return ( <>
  <div className='Login_item'>
      <Logo />
      <h1 id='title_vhod'>Восстановить пароль</h1>
      <div className="inptu">
        <Input placeholder={'Номер телефона или e-mail'} type={'tel'} />
        <div className="input_but">
            <ButtonMin text={'Отправить'}/>
            <InputMin placeholder={'Полученный код'} type={'text'} />
        </div>
        <Button text={'Далее'}/>
      </div>
    </div>

  </>
    
  )
}

export default Vost