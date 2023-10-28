import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
        <a href="#" className='footer__logo'>YASSER</a>
        <ul>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={''}></Link>About</li>
           <li><Link to={''}></Link>B</li>
           <li><Link to={''}></Link></li>
           <li><Link to={''}></Link></li>
           <li><Link to={''}></Link></li>
        </ul>
    </footer>
  )
}
