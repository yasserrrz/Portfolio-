import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
// import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
export default function Footer() {
  return (
    <footer className='position-relative'>
        <a href="#" className='footer__logo'>YASSER</a>
        <ul>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/about'}>About</Link></li>
           <li><Link to={'/portfolio'}>Projects</Link></li>
           <li><Link to={'/contactUs'}>Contact Me </Link></li>
        </ul> 
        <div className="footer__socials d-flex">
          <a href="http://"><AiFillInstagram/></a>
          <a href="http://"><FaLinkedinIn/></a>
          <a href="http://"><IoLogoWhatsapp/></a>

        </div>
        <div className="footer__copyright">
          <small>&copy; YASSER. All rights reserved</small>

        </div>
    </footer>
  )
}
