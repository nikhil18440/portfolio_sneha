import React from 'react'
import './style.css'
import Navbar from '../Navbar/Navbar'

export default function Hero() {
  return (
    <div className='Hero'>
        <Navbar/>

        <div>
            
            <div className="mainTexts">
                <div className="line1">myself, Sneha</div>
                <div className="line2">I am an</div>
            </div>
                <div className="line3">ARCHITECT</div>

            <div className="imgDiv">
                <img className='mainImg' src='./kendall.jpg' alt="" />
                {/* <img className='mainImg2' src='./billie_portrait.png' alt="" /> */}
            </div>
        </div>
    </div>
  )
}
