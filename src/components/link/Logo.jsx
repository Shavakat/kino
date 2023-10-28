import React from 'react'
import { useNavigate } from "react-router-dom";
import './Logo.css'

const Logo = () => {
  const navigate = useNavigate();

  return <>
  <div onClick={() => navigate("/")} id="logo">
    <img id='logo_img' src="src/assets/Logo.svg" alt="" />
    <img src="src/assets/Kinoarea.svg" alt="" />
  </div>
  </>
}

export default Logo