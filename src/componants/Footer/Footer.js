import React from 'react';
import './Footer.css';
import {FaWhatsapp,FaInstagram,FaLinkedin,FaFacebook} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-items'>

       <div className='Whatsapp'><a href="" ><FaWhatsapp /></a></div>
       <div className='Linked'><a href="" ><FaLinkedin/></a></div>  
       <div className='Fb' ><a href="" ><FaFacebook /></a></div> 
       <div className='insta'><a href="" ><FaInstagram /></a></div> 
          
      </div>
    </footer>
  )
}
