import React from 'react'
import '../../styles/components/menu/menu.css'
export default function Menu() {
  return (
    <div className='menu-container'>
      <ul className='menu'>
        <li><a> Destination </a> </li>
        <a><li>Our activity</li></a>
        <a><li>trips</li></a>
        <a><li>who we are</li></a>
      </ul>
    </div>
  )
}
