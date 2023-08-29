import React from "react";
import "./about.css";
import square from "../../assets/square.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuFolderCheck } from "react-icons/lu";

const About = () => {
    return (
        <section id="about">
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
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>Solo projects</small>
                        </article>

                        <article className="about__card">
                            <LuFolderCheck className="about__icon" />
                            <h5>Projects</h5>
                            <small>You can see my project on GitHub</small>
                        </article>
                    </div>

                    <p>
                        Hi my name is Marian Remus Burlacu but u can just call
                        me Remus. <br />
                        I'm a front end developer base in Turin with a keen eye
                        for designing good looking and user friendly web
                        application. <br />I would like to expand my horizons by
                        gaining work experience and living outside Italy for
                        improving myself
                    </p>

                    <a href="#contacts" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
