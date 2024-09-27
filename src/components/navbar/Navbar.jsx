import React from 'react'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import '../../styles/components/navbar/navbar.css'

export default function Navbar() {
  return (
   <header>
        <nav>
           <Logo></Logo>
           <Menu></Menu>
        </nav>
   </header>
  )
}
