import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div className='contact'>
      <header>
        <h1>.get in Touch</h1>
      </header>
      
    <div className="mainContent">
        <div className="left">
            <form>
                {/* <label htmlFor="email">Email:</label> */}
                <input type="email" id="email" name="email" placeholder='email id'/>
                {/* <br /> */}
                {/* <label htmlFor="message">Message:</label> */}
                <textarea id="message" name="message" placeholder='enter your message...'/>
                {/* <br /> */}
                <button className='sendBtn' type="submit">SEND</button>
            </form>
        </div>
        <div className="right">

        </div>
    </div>

    </div>
  );
}