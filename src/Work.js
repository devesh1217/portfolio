import React, { useState } from 'react'
import Typed from 'react-typed'
import Prize from './Prize'
import './StyleSheet/work.css'
import html from './Photo/html.png'
import css from './Photo/css.png'
import js from './Photo/js.png'
import git from './Photo/git.png'
import flask from './Photo/flask.png'
import react from './Photo/reactIcon.png'
import yt from './Photo/youtube.png'
import arduino from './Photo/arduino.png'
import healthify from './Photo/healthify.in.png'
import portfolio from './Photo/portfolio.png'
import expense from './Photo/expense.png'
import LineFollwer from './Photo/line follower1.jpg'
import mongodb from './Photo/mongo.png'
import expressjs from './Photo/express.png'
import nodejs from './Photo/node.png'
import web from './Photo/web.png'
import educate from './Photo/educate.png'


function Work() {
    const [project] = useState(
        [
            {
                name: 'Educate: Private Tutor Website',
                tech: [mongodb, expressjs, nodejs, html, css, js],
                title: ['React', 'Flask', 'Oracle Database'],
                link: 'https://educate-devesh1217.vercel.app/',
                repo: 'https://github.com/devesh1217/Educate',
                linkIcon: web,
                repoIcon: git,
                image: educate,
                desc: 'Private tutor profile & class-test management website using Google Drive APIs'
            },
            {
                name: 'Personal Expense Manager',
                tech: [mongodb, expressjs, react, nodejs],
                title: ['React', 'Flask', 'Oracle Database'],
                link: 'https://my-expense-manager-devesh1217.vercel.app/',
                repo: 'https://github.com/devesh1217/MyExpenseManager',
                linkIcon: web,
                repoIcon: git,
                image: expense,
                desc: 'Full Stack Project to manage persoanl income/expenses'
            },
            {
                name: 'Personal Portfolio Website',
                tech: [html, css, js, react],
                title: ['HTML', 'CSS', 'JavaScript', 'React'],
                link: 'https://devesh1217.github.io/portfolio',
                repo: 'https://github.com/devesh1217/portfolio',
                linkIcon: web,
                repoIcon: git,
                image: portfolio,
                desc: ''
            },
            {
                name: 'Health & Welness Website',
                tech: [html, css, js],
                title: ['HTML', 'CSS', 'JavaScript'],
                link: 'https://devesh1217.github.io/healthify.in/',
                repo: 'https://github.com/devesh1217/healthify.in',
                linkIcon: web,
                repoIcon: git,
                image: healthify,
                desc: <Prize />
            },
            {
                name: 'Line Following Bot',
                tech: [arduino],
                title: ['Arduino'],
                link: 'https://youtu.be/1WXcGlSE720',
                repo: '',
                linkIcon: yt,
                repoIcon: git,
                image: LineFollwer,
                desc: ''
            }
        ]
    )
    return (
        <div id="work-box">
            <h1 id="who" data-aos="zoom-in-up" data-aos-duration="1000">What did I do? {(window.innerWidth < 1000) ? <br /> : ''}<span className='typed-text'><Typed strings={['Find here...']} typeSpeed={150} loopCount={1} /></span></h1>
            <div id="work-content" data-aos="zoom-in-up" data-aos-duration="1000">
                <h1 id="fresher">I'm a fresher now. So, no work experience.</h1>
                <h3 id="fresher-desc">If you have any Job/internship for me please <a
                    href="#contact-box"><i>contact</i></a> me.</h3>
            </div>
            <h1 id="who" data-aos="zoom-in-up" data-aos-duration="1000">My Projects {(window.innerWidth < 1000) ? <br /> : ''}<span className='typed-text'><Typed strings={['I love projects!']} typeSpeed={150} loopCount={1} /></span></h1>
            <div id="work-content2">
                {project.map((curr, index) => {
                    if ((index + 1) % 2 === 0) {
                        return (
                            <div className="project odd" key={curr.name}>
                                <div className="proj-detail" data-aos="zoom-in-right" data-aos-duration="1000">
                                    <div className="proj-name">{curr.name}</div>
                                    <div className="proj-desc" style={{ maxWidth: '500px' }}>{curr.desc}</div>
                                    <div className="proj-tech">Project Technologies: {curr.tech.map((icon, indx) => {
                                        return (<img src={icon} alt={curr.title[indx]} title={curr.title[indx]} style={{ width: (curr.linkIcon === flask) ? '45px' : '30px' }} key={indx} />)
                                    })}</div>
                                    <div className="proj-link">Project Link:
                                        {
                                            curr.repo &&
                                            <a target="_blank" rel="noopener noreferrer"
                                                href={curr.repo} ><img src={curr.repoIcon} alt="GitPage"
                                                    width="30px" />
                                            </a>
                                        }
                                        <a target="_blank" rel="noopener noreferrer"
                                            href={curr.link} ><img src={curr.linkIcon} alt="GitPage"
                                                width="30px" /></a>
                                    </div>
                                </div>
                                <div className="proj-img" data-aos="zoom-in-left" data-aos-duration="1000"><a target="_blank" rel="noopener noreferrer"
                                    href={curr.link} ><img src={curr.image} alt="" /></a>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="project even" key={curr.name}>
                                <div className="proj-img" data-aos="zoom-in-left" data-aos-duration="1000"><a target="_blank" rel="noopener noreferrer"
                                    href={curr.link} ><img src={curr.image} alt="" /></a>
                                </div>
                                <div className="proj-detail" data-aos="zoom-in-right" data-aos-duration="1000">
                                    <div className="proj-name">{curr.name}</div>
                                    <div className="proj-desc" style={{ maxWidth: '500px' }}>{curr.desc}</div>
                                    <div className="proj-tech">Project Technologies: {curr.tech.map((icon, indx) => {
                                        return (<img src={icon} alt={curr.title[indx]} title={curr.title[indx]} style={{ width: (curr.linkIcon === flask) ? '45px' : '30px' }} key={indx}/>)
                                    })}</div>
                                    <div className="proj-link">Project Link:
                                        {
                                            curr.repo &&
                                            <a target="_blank" rel="noopener noreferrer"
                                                href={curr.repo} ><img src={curr.repoIcon} alt="GitPage"
                                                    width="30px" />
                                            </a>
                                        }
                                        <a target="_blank" rel="noopener noreferrer"
                                            href={curr.link} ><img src={curr.linkIcon} alt="GitPage"
                                                width="30px" /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default Work;