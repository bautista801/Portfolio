import './About.css'
import React from 'react'
import ME from '../../img/assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {VscNewFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h4>Get to Know</h4>
        <h1>About Me</h1>

        <div className='container about__container'>
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="me" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                  <article className='about__card'>
                      <FaAward className='about__icon' />
                      <h5>Experience</h5>
                      <small>1+ Year Working</small>
                  </article>

                  <article className='about__card'>
                      <VscNewFolder className='about__icon' />
                      <h5>Projects</h5>
                      <small>10+ Personal Projects</small>
                  </article>
                </div>

                <p>
                    I am 19 years old, I am from Bariloche, Argentina, I am currently working at Coderhouse, 
                    as a tutor for the Web Development course, where my role is to correct the challenges 
                    (homework) of the students corresponding to each class and I give them complete feedback 
                    on their progress, answer queries through the platform's chat, monitor attendance in online 
                    classes. Outside of work, I like to unleash my creativity and carry out personal projects, 
                    where I can develop functional and fully responsive sites for all types of devices.
                    <br />
                    I am looking for new challenges in the area of ​​frontend development, where I can 
                    expand my knowledge and passion for programming, and learning about new roles in the world 
                    of development.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>        
        </div>
    </section>
  )
}

export default About