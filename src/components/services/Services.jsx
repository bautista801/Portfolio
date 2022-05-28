import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
        <h4>What I Offer</h4>
        <h2 className='service__title'>Services</h2>

        <div className="container services__container">          

            {/* seccion de diseñadpr web */}

            <article className='service'>
                <div className="service__head">
                  <h2>Web Development</h2>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                    <li>
                        <BiCheck />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services