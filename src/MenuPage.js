import React from 'react'
import './StyleSheet/mobile.css'
function ManuPage() {
    return (
        <div>
            <div id="menu-page">
                <div id="close"><button id="close-btn">x</button></div>
                <a id="mobile-name" href="#"><span id="dev">Dev</span>esh <span id="me">Me</span>hta's <span class="blue">Portfolio</span></a>
                <a class="mobile-menu" href="#" onclick="javascript:menuOFF();"> Home</a>
                <a class="mobile-menu" href="#intro-box" onclick="javascript:menuOFF();">About Me</a>
                <a class="mobile-menu" href="#edu-box" onclick="javascript:menuOFF();">Education</a>
                <a class="mobile-menu" href="#work-box" onclick="javascript:menuOFF();">Wrok</a>
                <a class="mobile-menu" href="#contact-box" onclick="javascript:menuOFF();">Contact Me</a>
                <div id="menu-bottom">
                    <div id="mobile-social">
                        <a target="_blank" href="https://www.linkedin.com/in/devesh1217/"><img src="Photo/linkedin.png"
                            alt="linkedin" /></a>
                        <a target="_blank" href="https://github.com/devesh1217"><img src="Photo/git.png" alt="GitHub" /></a>
                        <a target="_blank" href="https://www.instagram.com/devesh_1217/"><img src="Photo/insta.webp"
                            alt="Instagram" /></a>
                        <a target="_blank"
                            href="https://www.canva.com/design/DAFt9T5c3vk/GolOZY_DMOJm_K4MR_Y-Ig/view?utm_content=DAFt9T5c3vk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><img
                                src="Photo/download.png" alt="Download Resume" title="Download Resume" /></a>
                    </div>
                    <div id="cp">&copy; 2023. All rights are reserved.</div>
                </div>
            </div>
        </div>
    )
}
export default ManuPage;