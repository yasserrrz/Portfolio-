import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
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
          <a href="http://"><FiInstagram/></a>
          <a href="http://"></></a>

        </div>
    </footer>
  )
}
