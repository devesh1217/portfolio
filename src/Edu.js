import React,{useState} from 'react'
import './StyleSheet/edu.css'
import Typed from 'react-typed'

function Edu() {
    const [eduData] = useState(
        [
            {
                classNameFull:'BTech (Computer Science & Engineering)',
                classNameShort:'BTech (CSE)',
                year:'2026',
                mark:'9.19 CGPA(Sem IV)',
                instituteFull:'Saradar Vallabhbhai National Institute of Technology, Surat',
                instituteShort:'SVNIT, Surat'
            },
            {
                classNameFull:'HSC',
                classNameShort:'HSC',
                year:'2022',
                mark:'87%',
                instituteFull:'Gujarat Sceondary & Higher Sec. Edu. Board, Gandhinagar',
                instituteShort:'GSHSEB, Gandhinagar'
            },
            {
                classNameFull:'Diploma in Performing Arts (Tabla)',
                classNameShort:'DPA (Tabla)',
                year:'2020',
                mark:'DISCT',
                instituteFull:'The Maharaj Sayajirao University of Baroda',
                instituteShort:'MSU, Vadodara'
            }
        ]
    )
    return (
        <div id="edu-box">
            <h1 id="who" data-aos="zoom-in-up" data-aos-duration="1000">
                What I studied? {(window.innerWidth<1000)?<br/>:''}<span className='typed-text'><Typed strings={['All of these!']} typeSpeed={150} loopCount={1}/></span>
            </h1>
            <div id="edu-content">
                <div id="edu-right">
                    {eduData.map((curr)=>{
                        return(
                            <div className="edu-data" data-aos="zoom-in-up" data-aos-duration="1000">
                                <div className="edu-upper">
                                    <div className="degree">{(window.innerWidth>1000)?curr.classNameFull:curr.classNameShort}</div>
                                    <div className="year">{curr.year}</div>
                                </div>

                                <div className="edu-lower">
                                    <div className="desc">
                                    {(window.innerWidth>1000)?curr.instituteFull:curr.instituteShort}
                                    </div>
                                    <div className="marks">{curr.mark}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Edu