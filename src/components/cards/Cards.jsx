import React from 'react'
import '../../styles/components/cards/cards.css'
export default function Cards({title}) {
  return (
    <div className='card'>
      <div className="card-img">
        <img src="https://img.freepik.com/free-photo/long-shot-cliffed-coast-with-crystalline-water_23-2148229769.jpg?t=st=1727364345~exp=1727367945~hmac=fd5bc558dabf8ee6f011b459a5d0e2c3315469e135ff761240366f32bb3673b6&w=740" alt="" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
      </div>
    </div>
  )
}
