
import { Link } from 'react-router-dom'
import CV from '../../assets/Yasser-Mhammed-CV.pdf'
export default function CTA() {
  return (
  <>
        <div className="cta mt-3 d-flex gap-3 justify-content-center position-relative mb-4">
            <a href={CV} download className='
             button
            text-decoration-none text-center  d-flex align-items-center '>
             <p className='m-0 p-0'>Download CV</p>
            </a>
            <Link className='glow-on-hover  text-decoration-none d-flex justify-content-center align-items-center' to={"/contactUs"}>
              <p className= "mx-3 my-0 p-0 ">
              Let's Talk
              </p>
              </Link>
        </div>
  </>
  )
}
