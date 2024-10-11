import React from 'react'
import './education.css'

export default function Education() {
  return (
    <div className='education'>
        <header className='eduHeader'>
            <h1>.Education</h1>
        </header>

        <div className="mainContent">
            <div className="div1">
                <div  className="leftdiv1">2004-16</div>
                <div data-text='Completed my primary education in Bharathamatha H.S.S Palakkad(1st-10th)' className="rightdiv1">Completed my primary education in Bharathamatha H.S.S Palakkad(1st-10th)</div>
            </div>
            <div className="div2">
                <div data-text='Completed my secondary education in Bharathamatha H.S.S Palakkad(11th-12th)' className="rightdiv1">Completed my secondary education in Bharathamatha H.S.S Palakkad(11th-12th)</div>
                <div className="leftdiv1">2016-18</div>
            </div>
            <div className="div3">
                <div className="leftdiv1">2018-23</div>
                <div data-text='Completed my college education from Global Institute of Architecture. Palakkad(2018-2013)' className="rightdiv1">Completed my college education from Global Institute of Architecture. Palakkad(2018-2013)</div>
            </div>
        </div>
    </div>
  )
}
