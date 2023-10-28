import React from 'react'
import { Link } from 'react-router-dom'
import CV from '../../assets/Yasser_Mohamed_Resume_30-07-2023-07-37-40.pdf'
export default function CTA() {
  return (
  <>
        <div className="cta mt-3 d-flex gap-3 justify-content-center">
            <a href={CV} download className='btn btn-outline-info'>
              Download CV
            </a>
            <Link className='glow-on-hover text-decoration-none' to={"/contactUs"}>Let's Talk</Link>
        </div>
  </>
  )
}
