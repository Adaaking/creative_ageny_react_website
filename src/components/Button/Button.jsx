import { color } from '@mui/system';
import React from 'react'
import { HashLink as Link } from "react-router-hash-link";

const Button = ({ text,link }) => {
  return (
    <button className='btn'><Link to={link} smooth
    style={{textDecoration:"none"}}
    >{text}</Link></button>
  )
}

export default Button