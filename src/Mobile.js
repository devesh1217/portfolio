import React from 'react'
import './StyleSheet/mobile.css'
import linkedIn from './Photo/linkedin.png'
import git from './Photo/git.png'
import insta from './Photo/insta.webp'
import download from './Photo/download.png'

function Mobile({ isOpen, setIsOpen, handleClick }) {

    return (
        <div id="menu-page" style={{ display: (isOpen) ? 'block' : 'none' }}>
            <div id="close"><button id="close-btn" onClick={handleClick}>x</button></div>
            <div id="mobile-name"><a  href="#header-box"><span id="dev">Dev</span>esh <span id="me">Me</span>hta's <span
                className="blue">Portfolio</span></a></div>
            <div className='mobile-menu-box'>
                <a className="mobile-menu" href="#header-box" onClick={handleClick}> Home</a>
                <a className="mobile-menu" href="#intro-box" onClick={handleClick}>About Me</a>
                <a className="mobile-menu" href="#edu-box" onClick={handleClick}>Education</a>
                <a className="mobile-menu" href="#work-box" onClick={handleClick}>Wrok</a>
                <a className="mobile-menu" href="#contact-box" onClick={handleClick}>Contact Me</a>
            </div>
            <div id="menu-bottom">
                <div id="mobile-social">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/devesh1217/"><img src={linkedIn}
                        alt="linkedin" /></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/devesh1217"><img src={git} alt="GitHub" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/devesh_1217/"><img src={insta}
                        alt="Instagram" /></a>
                    <a target="_blank" rel="noreferrer"
                        href="https://drive.google.com/file/d/1tk9GDpLO5NnjHXecfvpXQExENsQlLd7X/view?usp=sharing"><img
                            src={download} alt="Download Resume" title="Download Resume" /></a>
                </div>
                <div id="cp">&copy; 2023. All rights are reserved.</div>
            </div>
        </div>
    )
}
export default Mobile;