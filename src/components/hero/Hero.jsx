import React from 'react'
import '../../styles/components/hero/hero.css'


export default function Hero() {
  return (
    <section className='hero-banner'>
        <div className="placeName">
                <p>Lorem ipsum dolor sit.</p>
                <h3>Himchal</h3>
        </div>

        <div className="btns">
            <ul>
                <a className='active' href="">
                    <li id="">01</li>
                </a>
                <a href="">
                    <li id="">02</li>
                </a>
                <a href="">
                    <li id="">03</li>
                </a>
                <a href="">
                    <li id="">04</li>
                </a>
                <a href="">
                    <li id="">05</li>
                </a>
            </ul>
        </div>
    </section>
  )
}
