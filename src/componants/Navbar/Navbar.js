import React from 'react';
import './Navbar.css';
import {FaBars} from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { useState } from 'react';
function Navbar() {

 const [menuOpen,setMenuOpen]=useState(false)

  useGSAP(()=>{

    gsap.from('nav',{
      y:-10,
      opacity:0,
      delay:0.5,
     
    })
  })
  return (
    
       <nav>
          <div className='nav_Logo'>
              <h4>Sneha</h4>
          </div>
          <div className='nav_items' >
              <ul className={menuOpen?'open':''}>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Experience">Experience</a></li>
              </ul>
          </div>
         
            <button className='nav_btn' onClick={()=>(setMenuOpen(!menuOpen))} >{menuOpen?<IoMdClose/>:<FaBars/>}</button>
           
        </nav> 
    
  )
}

export default Navbar
