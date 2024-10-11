import React from 'react'
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import './style.css'

export default function Social() {
  return (
    <div className='Social'>
        <h1 className="SocialHead">
          .follow me on
        </h1>

        <ul className="icons">
          <li className="SocialIcon">
            <FaInstagram className='reactIcon' size={40}/>
          </li>
          <li className="SocialIcon">
            <FaLinkedin className='reactIcon' size={40}/>
          </li>
          <li className="SocialIcon">
            <FaXTwitter className='reactIcon' size={40}/>
          </li>
        </ul>
    </div>
  )
}
