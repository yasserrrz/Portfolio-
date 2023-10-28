import React from 'react'
import { Link } from 'react-router-dom'
import CV from '../../assets/Yasser_Mohamed_Resume_30-07-2023-07-37-40.pdf'
export default function CTA() {
  return (
  <>
        <div className="cta mt-3 d-flex gap-3 justify-content-center position-relative mb-4">
            <a href={CV} download className=' btn_animation text-decoration-none   d-flex align-items-center '>
              Download CV
            </a>
            <Link className='glow-on-hover px-0 text-decoration-none d-flex justify-content-center align-items-center' to={"/contactUs"}>Let's Talk</Link>
        </div>
  </>
  )
}
