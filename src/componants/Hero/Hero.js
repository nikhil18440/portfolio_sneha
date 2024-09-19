import React from 'react'
import './Hero.css';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
// import {FaWhatsapp,FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa'

export default function Hero() {

  useGSAP(()=>{

    gsap.from('.description ,.icons',{
      y:-10,
      x:-10,
      opacity:0,
      delay:0.8,
     
    })
    gsap.from(('.img_sneha'),{
      y:-10,
      x:10,
      opacity:0,
      delay:1,
    })
  })

  return (
    <section className='section_hero'>
        <div className='img_sneha'>
            <img src='./author_img.png' alt="img" className='author_img' />
        </div>
        <div className='gradient'>
          <div className='gradient_dropShadow'></div>
        </div>
        <div className='intro'>
            <div className="description">
                <p>Hi there,myself <span className='subHeading'>Sneha.K</span><br></br>
                  I am a Professional <br></br><span className='mainHeading'>ARCHITECT</span>
                </p>  
            </div>
            {/* <div className='icons'>
              <a href=""><FaWhatsapp/></a>
              <a href=""><FaInstagram/></a>  
              <a href=""><FaTwitter/></a>
              <a href=''><FaFacebook/></a>
            </div> */}
        </div>
      </section>
  )
}
