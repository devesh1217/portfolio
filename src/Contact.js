import React, { useState } from 'react'
import './StyleSheet/contact.css'
import linkedIn from './Photo/linkedin.png'
import git from './Photo/git.png'
import insta from './Photo/insta.webp'
import download from './Photo/download.png'
import email from './Photo/email.webp'
import Typed from 'react-typed'



function Contact() {
    const [formData,setFormData]=useState({
        'name':'',
        'email':'',
        'org':'',
        'phone':'',
        'msg':''
    })
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        fetch("https://flask-mail-4rtz.onrender.com/send_emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            
            .then((data) => {
                console.log('hi')
                alert('Mail sent')
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    // const handleSubmit=(event)=>{
    //     const config={
    //         SecureToken:'3069cc02-eeb0-443b-8a83-04a018bb77f6',
    //         Port: 587,
    //         To : 'devesh1217@yahoo.com',
    //         From : "u22cs035@coed.svnit.ac.in",
    //         Subject : "This is the subject",
    //         Body : `Name:${formData.name}\n'email':${formData.email}\n'org':${formData.org}\n'phone':${formData.phone}\n'msg':${formData.msg}`
    //     }
    //     console.log('hi')
    //     event.preventDefault();
    //     console.log('hi')
    //     if(window.Email){
    //         window.Email.send(config).then(()=>{
    //             alert('Email sent!')
    //         })
    //     }
    // }
    return (
        <div id="contact-box">
            <h1 id="who" data-aos="zoom-in-up" data-aos-duration="1000">Liked my profile? {(window.innerWidth<1000)?<br/>:''}<span className='typed-text'><Typed strings={['You can find me here...']} typeSpeed={150} loopCount={1}/></span>
            </h1>
            <div id="contact-content">
                <div id="contact-top">
                    <form  data-aos="zoom-in-up" data-aos-duration="1000" onSubmit={handleSubmit}>
                        <h2 id="contact-form-title" data-aos="zoom-in-up" data-aos-duration="1000">Contact Form</h2>
                        <fieldset>
                            <legend>Name*</legend>
                            <input type="text" name="name" id="name" required  onChange={handleChange}/>
                        </fieldset>
                        <fieldset>
                            <legend>Organizaton Name*</legend>
                            <input type="text" name="org" id="o-name" required  onChange={handleChange}/>
                        </fieldset>
                        <fieldset>
                            <legend>Email*</legend>
                            <input type="email" name="email" id="email" required  onChange={handleChange}/>
                        </fieldset>
                        <fieldset>
                            <legend>Phone No.</legend>
                            <input type="text" name="phone" id="no"  onChange={handleChange}/>
                        </fieldset>
                        <fieldset>
                            <legend>Query*</legend>
                            <textarea name="query" id="msg" cols="30" rows="3" required onChange={handleChange}></textarea>
                        </fieldset>
                        <div id="contact-form-submit">
                            <input type="submit" name="Submit" value="Submit" onSubmit={handleSubmit}/>
                            <input type="reset" value="Reset" />
                        </div>
                    </form>
                </div>
                <div id="contact-down">
                    <h2 id="contact-form-title" data-aos="zoom-in-up" data-aos-duration="1000">Social Handles</h2>
                    <ul id="contact-list">
                        <li data-aos="zoom-in-up" data-aos-duration="1000"><a
                            target="_blank" rel="noreferrer" href="mailto:devesh1217@yahoo.com"><img src={email} alt="Email" />devesh1217@yahoo.com</a></li>
                        <li data-aos="zoom-in-up" data-aos-duration="1000"><a target="_blank" rel="noreferrer"
                                href="https://www.linkedin.com/in/devesh1217/"><img src={linkedIn}
                            alt="linkedin" />/devesh1217</a></li>
                        <li data-aos="zoom-in-up" data-aos-duration="1000"><a
                            target="_blank" rel="noreferrer" href="https://github.com/devesh1217"><img src={git} alt="GitHub" />/devesh1217</a></li>
                        <li data-aos="zoom-in-up" data-aos-duration="1000"><a
                            target="_blank" rel="noreferrer" href="https://www.instagram.com/devesh_1217/"><img src={insta} alt="GitHub" />@devesh1217</a></li>
                    </ul>
                    <h2 id="contact-form-title" data-aos="zoom-in-up" data-aos-duration="1000">Resume</h2>
                    <ul id="contact-list">
                        <li data-aos="zoom-in-up" data-aos-duration="1000" href="#"><a target="_blank" rel="noreferrer"
                                href="https://www.canva.com/design/DAFt9T5c3vk/GolOZY_DMOJm_K4MR_Y-Ig/view?utm_content=DAFt9T5c3vk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><img src={download}
                            alt="Download Resume" />Download
                                Resume</a></li>
                    </ul>
                </div>
            </div>
            <div id="cp">&copy; 2023. All rights are reserved. All Icons by <a href='https://icons8.com/'>Icons8</a>.</div>
        </div>
    )
}
export default Contact;