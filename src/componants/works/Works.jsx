import React from 'react'
import './style.css'

export default function Works() {

    

  return (
    <div className='Works'>

        <header className="mainHead">
            <h1>.my works</h1>
        </header>

        <div className="allworksDiv">
        
            <div className="singlework" id='singleWork1'>
                <img src="./kendall.jpg" alt="" />
                <h3>01.THESIS</h3>
            </div>
            <div className="singlework" id='singleWork2'>
                <img src="./tupac.webp" alt="" />
                <h3>01.THESIS</h3>
            </div>
            <div className="singlework" id='singleWork3'>
                <img src="./kendall.jpg" alt="" />
                <h3>01.THESIS</h3>
            </div>
            <div className="singlework" id='singleWork4'>
                <img src="./kendall.jpg" alt="" />
                <h3>01.THESIS</h3>
            </div>
            <div className="singlework" id='singleWork5'>
                <img src="./jenna.jpg" alt="" />
                <h3>01.THESIS</h3>
            </div>
            <div className="singlework" id='singleWork6'>
                <img src="./billie.jpg" alt="" />
                <h3>01.THESIS</h3>
            </div>
            <div className="singlework" id='singleWork4'>
                <img src="./kendall.jpg" alt="" />
                <h3>01.THESIS</h3>
            </div>

        </div>


        <div className='viewAllDiv'>
          <button className='allWorksBtn'>
            view all my works
          </button>
        </div>

    </div>
  )
}
