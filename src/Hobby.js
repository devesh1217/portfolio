import React from 'react'
import './StyleSheet/intro.css'

function Hobby({isHobbyOpen,setHobbyOpen}) {

    const handleClick=()=>{
        if(isHobbyOpen){
            setHobbyOpen(false)
        } else {
            setHobbyOpen(true)
        }
    }
    return (
        <div className="intro-card" id="hobbies">
            <div className="intro-card-title" data-aos="zoom-in-up" data-aos-duration="1000" onClick={handleClick}>
                #Hobbies<span className="up" style={{transform:(isHobbyOpen)?'':'rotate(180deg)'}}>▲</span>
            </div>
            <div className="intro-card-detail" style={{display:(isHobbyOpen)?'block':'none'}}>
                <ul id="hobby-list">
                    <li><div className="hobby-icon"><span role='img' aria-label='Reading'>📖</span></div> Reading (mainly Scriptures)</li>
                    <li><div className="hobby-icon"><span role='img' aria-label='Yoga'>🧘🏻</span></div> Yoga & Maditaion</li>
                    <li><div className="hobby-icon"><span role='img' aria-label='Teaching'>👨🏻‍🏫</span></div> Teaching</li>
                    <li><div className="hobby-icon"><span role='img' aria-label='Music'>🎶</span></div> Music & Playing Tabla</li>
                    <li><div className="hobby-icon"><span role='img' aria-label='Nature'>🌱</span></div> Nature Exploration</li>
                    <li><div className="hobby-icon"><span role='img' aria-label='Physics'>⚛️</span></div> Physics</li>
                </ul>
            </div>
        </div>
    )
}
export default Hobby;