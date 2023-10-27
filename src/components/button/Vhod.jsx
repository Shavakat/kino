import React from 'react'
import { useNavigate } from "react-router-dom";
import './Vhod.css'

const Vhod = () => {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate("/Login/")} id='b_vhod' type="submit">Войти</button>
  )
}

export default Vhod

