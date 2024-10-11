import React, { useEffect, useRef } from 'react'
import './style.css'

export default function Works() {

    // const stickyRef = useRef()
    // console.log(stickyRef)
    let stickyRef = [...document.querySelectorAll('.sticky')]
    useEffect(() => {
        stickyRef = [...document.querySelectorAll('.sticky')]
    }, [])
    

    // useEffect(() => {
        window.addEventListener('scroll', (e) => {
            console.log('yes')
            for (let i = 0; i < stickyRef.length; i++) {
                transform(stickyRef[i])
            }
        })
    // }, [])
    

    function transform(section){
        console.log('hi')
        // if(section){
            const offsetTop = section.parentElement.offsetTop
            const scrollSection = document.querySelector('.scrollSection')
            console.log(scrollSection)
            let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100
            percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage
            scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0 ,0)`
        // }
    }

    // transform(stickyRef.current)

  return (
    <div className='Works'>

        <header className="mainHead">
            <h1 className='mainHeadText'>.notable works</h1>
        </header>

        <div className="stickyParent">
            <div className="sticky">
                <div className="scrollSection">
                    <div className="itemDiv" id='img1' >
                        <img className='itemImg'src="./billie.jpg" alt="" />
                        <h2 className='itemImgHead'>01.THESIS</h2>
                        <h3 className='itemImgText'>calicut, kerala</h3>
                    </div>
                    <div className="itemDiv">
                        <img className='itemImg' src="./billie.jpg" alt="" />
                        <h2 className='itemImgHead'>01.THESIS</h2>
                        <h3 className='itemImgText'>calicut, kerala</h3>
                    </div>
                    <div className="itemDiv">
                        <img className='itemImg' src="./billie.jpg" alt="" />
                        <h2 className='itemImgHead'>01.THESIS</h2>
                        <h3 className='itemImgText'>calicut, kerala</h3>
                    </div>
                    <div className="itemDiv">
                        <img className='itemImg' src="./billie.jpg" alt="" />
                        <h2 className='itemImgHead'>01.THESIS</h2>
                        <h3 className='itemImgText'>calicut, kerala</h3>
                    </div>
                    <div className="itemDiv">
                        <img className='itemImg' src="./billie.jpg" alt="" />
                        <h2 className='itemImgHead'>01.THESIS</h2>
                        <h3 className='itemImgText'>calicut, kerala</h3>
                    </div>
                    <div className="itemDiv">
                        <img className='itemImg' src="./billie.jpg" alt="" />
                        <h2 className='itemImgHead'>01.THESIS</h2>
                        <h3 className='itemImgText'>calicut, kerala</h3>
                    </div>
                    <div className="itemDiv" id='imgLast'>
                        <img className='itemImg' src="./billie.jpg" alt="" />
                        <h2 className='itemImgHead'>01.THESIS</h2>
                        <h3 className='itemImgText'>calicut, kerala</h3>
                    </div>



                    {/* <img className='itemImg' id='img1' src="./billie.jpg" alt="" />
                    
                    <img className='itemImg' src="./billie.jpg" alt="" />
                    <img className='itemImg' src="./billie.jpg" alt="" />
                    <img className='itemImg' src="./billie.jpg" alt="" />
                    <img className='itemImg' src="./billie.jpg" alt="" />
                    <img className='itemImg' id='imgLast' src="./billie.jpg" alt="" /> */}
                </div>
            </div>
        </div>
        



        {/* <div className="allworksDiv">
        
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

        </div> */}


        {/* <div className='viewAllDiv'>
          <button className='allWorksBtn'>
            view all my works
          </button>
        </div> */}

    </div>
  )
}
