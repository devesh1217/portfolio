import React from 'react'
import Typed from 'react-typed'
import Extra from './Extra'
import './StyleSheet/work.css'

function ExtraSection() {
    
    return (
        <div id="work-box">
            <h1 id="who" data-aos="zoom-in-up" data-aos-duration="1000">My Achivements & Extra-Curricular {(window.innerWidth < 1000) ? <br /> : ''}<span className='typed-text'><Typed strings={['Here it is...']} typeSpeed={150} loopCount={1} /></span></h1>
            <div id="work-content2">
                <Extra></Extra>
            </div>
        </div>
    )
}
export default ExtraSection;