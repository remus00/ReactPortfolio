import React from 'react'
import './footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>REMUS</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><GrFacebookOption/></a>
                <a href="https://instagram.com"><BsInstagram/></a>
                <a href="https://linkedin.com"><BsLinkedin/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; M. Remus Burlacu</small>
            </div>
        </footer>
    )
}

export default Footer