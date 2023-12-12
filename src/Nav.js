import React,{useState} from 'react'
import Mobile from './Mobile';
import './StyleSheet/mobile.css'
import './StyleSheet/Navbar.css'


function Nav({setTechOpen, setSoftOpen, setHobbyOpen, setLangOpen,} ) {
    const [isOpen,setIsOpen] = useState(false);
    const handleClick=()=>{
        setIsOpen(!isOpen);
    }

    const [aboutMe,setAboutMe] = useState(false)
    const aboutBtnClick=()=>{
        setAboutMe(!aboutMe)
    }
    const [work,setWork] = useState(false)
    const workBtnClick=()=>{
        setWork(!work)
    }
    return (
        <>            
            <nav className="nav-bar" style={{display:(isOpen)?'none':'flex'}}>
                <div className="left">
                    <a id="nav-name" href="#header-box"><span id="dev">Dev</span>esh <span id="me">Me</span>hta's <span className="blue">Portfolio</span></a>
                </div>
                <div className="right">
                    <a className="nav-menu" href="#header-box">Home</a>
                    <div className="nav-menu menu-hover-btn" href="#intro-box" onMouseEnter={aboutBtnClick} onMouseLeave={aboutBtnClick}>
                        About Me
                        <div className="menu-hover" style={{display:(aboutMe)?'flex':'none'}}>
                            <a className="menu-hover-item1" href="#intro-box">#AboutMe</a>
                            <a className="menu-hover-item1" href="#tech-skill" onClick={setTechOpen}>#TechnicalSkills </a>
                            <a className="menu-hover-item1" href="#soft-skill" onClick={setSoftOpen}>#SoftSkills</a>
                            <a className="menu-hover-item1" href="#hobbies" onClick={setHobbyOpen}>#Hobbies</a>
                            <a className="menu-hover-item1" href="#language" onClick={setLangOpen}>#LanguagesKnown</a>
                        </div>
                    </div>
                    <a className="nav-menu" href="#edu-box">Education</a>
                    <div className="nav-menu" href="#work-box" onMouseEnter={workBtnClick} onMouseLeave={workBtnClick}>
                        Work
                        <div className="menu-hover" style={{display:(work)?'flex':'none'}}>
                            <a className="menu-hover-item1" href="#work-box">#Work</a>
                            <a className="menu-hover-item1" href="#work-content2">#Project </a>
                        </div>
                    </div>
                    <a className="nav-menu" href="#contact-box">Contact Me</a>
                    <button id="toggle-btn" onClick={handleClick}>=</button>
                </div>
            </nav>
            {(window.innerWidth<1000)?<Mobile isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick}/>:<></>}
        </>
    )
}
export default Nav;