import React from 'react'
import './StyleSheet/intro.css'

function Language({isLangOpen,setLangOpen}) {

    const handleClick=()=>{
        if(isLangOpen){
            setLangOpen(false)
        } else {
            setLangOpen(true)
        }
    }
    return (
        <div className="intro-card" id="language" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="intro-card-title" onClick={handleClick}>
                #LanguagesKnown<span className="up" style={{transform:(isLangOpen)?'':'rotate(180deg)'}}>▲</span>
            </div>
            <div className="intro-card-detail" style={{display:(isLangOpen)?'block':'none'}}>
                <ul id="lang-list">
                    <li><div className="lang-icon">E</div> English</li>
                    <li><div className="lang-icon">हि</div> Hindi</li>
                    <li><div className="lang-icon">ગુ</div> Gujarati</li>
                    <li><div className="lang-icon">सं</div> Sanskrit</li>
                </ul>
            </div>
        </div>
    )
}
export default Language;