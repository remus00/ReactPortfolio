import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoJava} from "react-icons/bi"
import {SiTailwindcss} from "react-icons/si"
import {FaPython} from "react-icons/fa"
import {SiCoursera} from "react-icons/si"
import {GrMysql} from "react-icons/gr"
const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <AiFillHtml5 className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiLogoCss3 className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiTailwindcss className="experience__details-icon" />
                            <div>
                                <h4>Tailwind CSS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiLogoJavascript className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BiLogoReact className="experience__details-icon" />
                            <div>
                                <h4>React.js</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Next.js</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONT END */}

                <div className="experience__backend">
                    <h3>Other Languages</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BiLogoJava className="experience__details-icon" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <SiCoursera className="experience__details-icon" />
                            <div>
                                <h4>C</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <GrMysql className="experience__details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <FaPython className="experience__details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
