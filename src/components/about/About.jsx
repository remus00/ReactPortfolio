import React from 'react'
import './about.css'
import square from '../../assets/square.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {LuFolderCheck} from 'react-icons/lu'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={square} alt="about image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Solo projects</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>10+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <LuFolderCheck className='about__icon'/>
                            <h5>Projects</h5>
                            <small>Project for myself</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quam doloremque 
                        iste cupiditate rem voluptatem eos nobis placeat, repudiandae, error consequatur necessitatibus 
                        iusto facilis inventore repellat, tenetur consequuntur eveniet labore!
                    </p>

                    <a href="#contacts" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
