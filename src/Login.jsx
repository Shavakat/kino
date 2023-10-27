import { useState, useSyncExternalStore } from 'react'
import './Login.css'
import TitleLog from './LoginComponents/title/TitleLog'
import Input from './LoginComponents/inputs/Input'


function Login() {

  return (
    <>
     <TitleLog />
     <Input />
    </>
  )
}

export default Login