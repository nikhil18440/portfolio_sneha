import React, { useEffect, useRef } from 'react';
import './Software.css';
import {Tilt} from 'react-tilt';
function Software() {

  const cardsContainer = React.useRef(null); // Adjust selector as per your div
  function applyOverlayMask(e) {
    const documentTarget = e.currentTarget;
  
    if (!cardsContainer) {
      return;
    }
  
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;
    console.log(x, y);
  }
  
  // Example usage: Attach the function to a mousemove or similar event
  // cardsContainer.addEventListener('mousemove', applyOverlayMask);
  
useEffect(()=>{
  document.body.addEventListener('pointermove',(e)=>{
    applyOverlayMask(e);
  })
},[]);

  return (
    <div className='software'>
       
             <h1 >.my Software Skills</h1>
        
      <Tilt options={{
          max:2,
          scale:1,
          speed:5
        }}>
      <div className="card">
        <div className="card-logos" ref={cardsContainer}>
          <div className='card-row1'>
            <img src="./illustrator.png" alt="img" />
            <img src="./illustrator.png" alt="img" />
            <img src="./illustrator.png" alt="img" />
            <img src="./illustrator.png" alt="img" />
            <img src="./illustrator.png" alt="img" />
            </div>
            <div className='card-row2'>
            <img src="./illustrator.png" alt="img" />
            <img src="./illustrator.png" alt="img" />
            <img src="./illustrator.png" alt="img" />
            <img src="./illustrator.png" alt="img" />
            <img src="./illustrator.png" alt="img" />
            </div>
           

        </div>
      </div>
      </Tilt>
    </div>
    
  )
}

export default Software
