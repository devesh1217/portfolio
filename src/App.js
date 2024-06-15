import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import './StyleSheet/style.css'
import Nav from './Nav';
import Top from './Top'
import Home from './Home';
import Intro from './Intro';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Edu from './Edu';
import Work from './Work';
import Contact from './Contact';
import Welcome from './Welcome';
import ExtraSection from './ExtraSection';

function App() {

    const [isLangOpen, setLangOpen] = useState(false)
    const [isHobbyOpen, setHobbyOpen] = useState(false)
    const [isSoftOpen, setSoftOpen] = useState(false)
    const [isTechOpen, setTechOpen] = useState(false)
    const [isWelcomeOpen, setWelcomeOpen] = useState(false)

    useEffect(() => {
        Aos.init();
    }, [])

    setTimeout(() => {
        setWelcomeOpen(false)
    }, 6000)
    
    if (isWelcomeOpen) {
        return <Welcome />
    } else {
        return (
            <>
                <Top />
                <Nav setTechOpen={setTechOpen} setSoftOpen={setSoftOpen} setHobbyOpen={setHobbyOpen} setLangOpen={setLangOpen} />
                <Home />
                <Intro isLangOpen={isLangOpen} isHobbyOpen={isHobbyOpen} isSoftOpen={isSoftOpen} isTechOpen={isTechOpen} setTechOpen={setTechOpen} setSoftOpen={setSoftOpen} setHobbyOpen={setHobbyOpen} setLangOpen={setLangOpen} />
                <Edu />
                <Work />
                <ExtraSection />
                <Contact />
            </>
        );
    }

}

export default App;
