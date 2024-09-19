import './Software.css';
import { Tilt } from 'react-tilt';
import React,{useState} from 'react';
function Software() {

  
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.target;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setX(x);
    setY(y);
  };
  return (
    <>
     <h1 className='mainText'>.my Software Skills</h1>
    <div className='software-items'>
   
 
    <div className="container">
       {/* <Tilt options={{
          max:3,
          scale:1,
          speed:5
        }}> */}
      <div
        className="card"
        style={{ '--clr': '#3cec7f4e', '--x': `${x}px`, '--y': `${y}px` }}
        onMouseMove={handleMouseMove}
      >
        <div className='icon-1'>
           <img src="./illustrator.png" alt="img" />
           <img src="./AutoCad.png" alt="img" />
           <img src="./AutoDesk.png" alt="img" />
       </div>
       <div className='icon-2'>
           <img src="./msOffice.png" alt="img" />
        
           <img src="./3DS.png" alt="img" />
           <img src="./photoshop.png" alt="img" />
        </div>
        <div className='icon-3'>
           <img src="./sketchup.png" alt="img" />
           <img src="./vRay.png" alt="" />
         
        </div>
         
          
       </div>
        {/* </Tilt> */}
      </div>
      </div>
      </>
  )
}

export default Software
