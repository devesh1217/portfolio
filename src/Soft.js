import React, { useState } from 'react'
import './StyleSheet/intro.css'

function Soft({isSoftOpen,setSoftOpen}) {
    const [softSkill] = useState([['Communication','Effective Communication in many languages'],['Teamwork','Vast teamwork experience'],['Problem Solving','Solving complex problem in easy way'],['Time Management','Effecient time management'],['Stress Management','Maditaion Lover'],['Creativity','This website an example']]);

    const handleClick=()=>{
        if(isSoftOpen===true){
            setSoftOpen(false)
        } else {
            setSoftOpen(true)
        }
    }
    return (
        <div className="intro-card" id="soft-skill" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="intro-card-title" onClick={handleClick}>
                        #SoftSkills<span className="up" style={{transform:(isSoftOpen)?'':'rotate(180deg)'}}>▲</span>
                    </div>
                    <div className="intro-card-detail" data-aos="zoom-in-up" data-aos-duration="1000" style={{display:(isSoftOpen)?'block':'none'}}>
                        <ul id="soft-skill-list">
                            {softSkill.map((curr)=>{
                                return(
                                    <li>
                                        {curr[0]}<br /><span className="soft-skill-desc">{curr[1]}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
    )
}
export default Soft;