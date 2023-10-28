import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
        <a href="#" className='footer__logo'>YASSER</a>
        <ul>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/a'}></Link>About</li>
           <li><Link to={''}></Link>Projects</li>
           <li><Link to={''}></Link>Contact Me</li>
           <li><Link to={''}></Link></li>
           <li><Link to={''}></Link></li>
        </ul>
    </footer>
  )
}
