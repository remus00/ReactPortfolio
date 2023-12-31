import React from "react";
import "./header.css";
import CTA from "./CTA";
import photo from "../../assets/photo.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Marian Remus Burlacu</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={photo} alt="me" />
                </div>

                <a href="#contacts" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
