import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
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
        .footer_
    </footer>
  )
}
