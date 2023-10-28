import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
// import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/'
export default function Footer() {
  return (
    <footer>
        <a href="#" className='footer__logo'>YASSER</a>
        <ul>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/about'}></Link>About</li>
           <li><Link to={'/portfolio'}></Link>Projects</li>
           <li><Link to={'/contactUs'}></Link>Contact Me</li>
        </ul> 
        <div className="footer__socials">
          <a href="http://"><AiFillInstagram/></a>
          <a href="http://"><FaLinkedinIn/></a>
          <a href="http://"><IoLogoWhatsapp/></a>

        </div>
    </footer>
  )
}
