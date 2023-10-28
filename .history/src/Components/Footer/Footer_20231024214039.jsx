
import './footer.css'
// import { Link } from 'react-router-dom'
// import {FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
export default function Footer() {
  return (
    <footer className='position-relative'>
        <a href="#" className='footer__logo'>YASSER</a>
        {/* <ul className='permalinks d-flex flex-column flex-md-row'>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'/about'}>About</Link></li>
           <li><Link to={'/portfolio'}>Projects</Link></li>
           <li><Link to={'/contactUs'}>Contact Me </Link></li>
        </ul>  */}
        <div className="footer__socials ">
          <a href="https://www.instagram.com/iam_yasserr/"><AiFillInstagram/></a>
          <a href="https://www.linkedin.com/in/yasser-mohamed-5ba73a198"><FaLinkedinIn/></a>
          <a href=""><IoLogoWhatsapp/></a>

        </div>
        <div className="footer__copyright">
          <small>&copy; YASSER. All rights reserved</small>

        </div>
    </footer>
  )
}
