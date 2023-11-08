import React from 'react'
import './StyleSheet/intro.css'
import Tech from './Tech';
import Soft from './Soft';
import Hobby from './Hobby';
import Language from './Language';
import profile from './Photo/profile-pic2.png';
import Typed from 'react-typed'

function Intro({isLangOpen,setTechOpen, isHobbyOpen,setSoftOpen, isSoftOpen,setHobbyOpen, isTechOpen,setLangOpen, }) {

    return (
        <div id="intro-box">
            <h1 id="who" data-aos="zoom-in-up" data-aos-duration="1000">
                Wnat to know about me?{(window.innerWidth<1000)?<br/>:''}<span className='typed-text'><Typed strings={['Here it is!']} typeSpeed={150} loopCount={1}/></span>
            </h1>
            <div id="intro-content">
                <div id="intro-left" data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src={profile} alt="" />
                </div>
                <div id="intro-right" data-aos="zoom-in-up" data-aos-duration="1000">
                    <p>
                        Welcome to my digital workspace, where I showcase my passion for
                        all things technology and innovation. I am Devesh Mehta, a
                        dedicated and enthusiastic computer engineer with a deep love for
                        solving complex problems and creating digital solutions. Here, you
                        will find a glimpse into my journey, my expertise, and my
                        commitment to pushing the boundaries of what's possible in the
                        world of technology.
                    </p>
                </div>
            </div>
            <div id="intro-other-details">
                <Tech isTechOpen={isTechOpen} setTechOpen={setTechOpen}/>
                <Soft isSoftOpen={isSoftOpen} setSoftOpen={setSoftOpen}/>
                <Hobby isHobbyOpen={isHobbyOpen} setHobbyOpen={setHobbyOpen}/>
                <Language isLangOpen={isLangOpen} setLangOpen={setLangOpen}/>
            </div>
        </div>
    )
}
export default Intro;