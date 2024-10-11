import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div className='contact'>
      <header>
        <h1 className='contactHead'>.get in Touch</h1>
      </header>
      
    <div className="mainContent">

            <form className='mainForm'>
                {/* <label htmlFor="email">Email:</label> */}
                <input className='formInput' type="email" id="email" name="email" placeholder='email id'/>
                {/* <br /> */}
                {/* <label htmlFor="message">Message:</label> */}
                <textarea className='formText' id="message" name="message" placeholder='enter your message...'/>
                {/* <br /> */}
                <button className='sendBtn' type="submit">SEND</button>
            </form>


    </div>

    </div>
  );
}