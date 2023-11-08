import React, { useState } from 'react'
import './StyleSheet/Animation.css'
import './StyleSheet/intro.css'
import injectStyle from './injectStyle';
import html from './Photo/html.png'
import css from './Photo/css.png'
import js from './Photo/js.png'
import react from './Photo/reactIcon.png'
import flask from './Photo/flask.png'
import java from './Photo/java.png'
import sql from './Photo/sql.png'
import py from './Photo/py.png'
import cpp from './Photo/cpp.png'
import android from './Photo/android.png'


function Tech({isTechOpen,setTechOpen}) {
    const [techSkill] = useState([
        ['Java',90,[java]],
        ['HTML,CSS & JavaScript',85,[html,css,js]],
        ['ReactJS',55,[react]],
        ['Falsk',30,[flask]],
        ['C++',70,[cpp]],
        ['Python',80,[py]],
        ['SQL',80,[sql]],
        ['Android Development',5,[android]]
    ]);

    const handleClick=()=>{
        if(isTechOpen===true){
            setTechOpen(false)
        } else {
            setTechOpen(true)
        }
    }
    return (
        <div className="intro-card" id="tech-skill">
            <div className="intro-card-title" data-aos="zoom-in-up" data-aos-duration="1000" onClick={handleClick}>
                #TechnicalSkills{(isTechOpen)?<span className="up">▲</span>:<span className="down">▼</span>}
            </div>
            <div className="intro-card-detail" id="tech-skill" style={{display:(isTechOpen)?'block':'none'}}>
                <ul id="tech-skill-list">
                    {techSkill.map((curr)=>{
                        injectStyle(
                            `@-webkit-keyframes fill {
                                0%   { width: 0;}
                                100% { width: `+(curr[1])+`; }
                            }`
                        );
                        return (
                            <li key={curr[0]}>
                                {curr[0]}
                                <div className='tech-icons'>
                                    {
                                        curr[2].map((i)=>{
                                            return <img src={i} style={{width:(window.innerWidth<1000)?'25px':'30px',float:'right'}} alt=''/>
                                        })
                                    }
                                </div>
                                <div className="bg-line"></div>
                                <div className="main-line" style={{width:curr[1]+"%",WebkitAnimation:'fill 3s ease' }}></div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Tech;