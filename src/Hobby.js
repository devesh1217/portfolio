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
                #Hobbies{(isHobbyOpen)?<span className="up">▲</span>:<span className="down">▼</span>}
            </div>
            <div className="intro-card-detail" style={{display:(isHobbyOpen)?'block':'none'}}>
                <ul id="hobby-list">
                    <li><div className="hobby-icon">📖</div> Reading (mainly Scriptures)</li>
                    <li><div className="hobby-icon">🧘🏻</div> Yoga & Maditaion</li>
                    <li><div className="hobby-icon">👨🏻‍🏫</div> Teaching</li>
                    <li><div className="hobby-icon">🎶</div> Music & Playing Tabla</li>
                    <li><div className="hobby-icon">🌱</div> Nature Exploration</li>
                    <li><div className="hobby-icon">⚛️</div> Physics</li>
                </ul>
            </div>
        </div>
    )
}
export default Hobby;