import React from 'react'
import {TiHtml5} from 'react-icons/ti'
import {DiCss3} from 'react-icons/di'
import {SiSass, SiJavascript, SiRedux} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {BiGitBranch} from 'react-icons/bi'
import {FaReact} from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  return (
    <section id='experience'>
        <h4 className='h4'>What Skills I Have</h4>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h2>Frontend Development</h2>
                <div className="experience__content">
                    <article className='experience__details'>
                        <TiHtml5 className='experience__details-icon' />
                        <div>
                            <h4>HTML 5</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <DiCss3 className='experience__details-icon' />
                        <div>                          
                            <h4>CSS 3</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiSass className='experience__details-icon' />
                        <div>                          
                            <h4>SASS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsFillBootstrapFill className='experience__details-icon' />
                        <div>                          
                            <h4>BOOTSTRAP</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BiGitBranch className='experience__details-icon' />
                        <div>
                            <h4>GIT</h4>
                            <small className='text-light'>Intermediate</small>                          
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiJavascript className='experience__details-icon' />
                        <div>                          
                            <h4>JAVASCRIPT</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaReact className='experience__details-icon' />
                        <div>                          
                            <h4>REACT.JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiRedux className='experience__details-icon' />
                        <div>                          
                            <h4>REDUX</h4>
                            <small className='text-light'>Basic</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience