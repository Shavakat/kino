import React from 'react'
import './InputMin.css'

const InputMin = ({
  value,
  onChange,
  placeholder,
  type
}) => {
  return (
    <input value={value} onCange={onChange} placeholder={placeholder} id='input_min' type={type}></input>
  )
}

export default InputMin