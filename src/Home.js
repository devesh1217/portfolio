import React from 'react'
import './StyleSheet/home.css'
import linkedIn from './Photo/linkedin.png'
import git from './Photo/git.png'
import insta from './Photo/insta.webp'
import download from './Photo/download.png'
import ilustrastion from './Photo/clipart.webp'
import Typed from 'react-typed'

export default function Home() {
    return (
        <div id="header-box">
            <div id="header-text" data-aos="zoom-in-up" data-aos-duration="1000">
                <h2 id="namste">नमस्ते & Welcome,</h2>
                <h1>I am </h1>
                <h1 id="header-name"><span id='devesh'>Devesh </span><span id='chetan'>Chetan </span><span id='mehta'>Mehta</span></h1>
                <h2 className="header-desc">And I am a Passionate</h2>
                <h2 className="header-desc"><span className='typed-text'><Typed strings={['Software Engineer','Full Stack Developer','Database Administrator','Programmer']} typeSpeed={150} loop/></span></h2>
                <div id="social">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/devesh1217/"><img src={linkedIn}
                        alt="linkedin" rel="noreferrer" /></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/devesh1217"><img src={git} alt="GitHub" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/devesh_1217/"><img src={insta}
                        alt="Instagram" /></a>
                    <a target="_blank" rel="noreferrer"
                        href="https://www.canva.com/design/DAFt9T5c3vk/GolOZY_DMOJm_K4MR_Y-Ig/view?utm_content=DAFt9T5c3vk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><img
                            src={download} alt="Resume" title="Resume" /></a>
                </div>
            </div>
            <div id="header-img" data-aos="zoom-in-up" data-aos-duration="1000"><img src={ilustrastion} alt="" /></div>
        </div>
    )
}
