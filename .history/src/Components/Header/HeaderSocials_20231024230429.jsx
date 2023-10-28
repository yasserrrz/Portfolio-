import React from 'react'
import {BsWhatsapp , BsInstagram , BsLinkedin} from 'react-icons/bs'
import {DiGithubFull } from 'react-icons/di'
export default function HeaderSocials() {
  return (
    <div className='header_socials d-flex   flex-column align-items-center mt-3 gap-2 position-absolute start-0' style={{bottom:"3rem"}}>
        <a href="https://www.linkedin.com/in/yasser-mohamed-5ba73a198"    target={`_blank`}>
            <BsLinkedin/>
        </a>
        <a href="https://github.com/yasserrrz" style={{fontSize:"2rem"}}    target={`_blank`}>
         <DiGithubFull/>
        </a>
        <a href="https://wa.me/+201094991544"     target={`_blank`}>
            <BsWhatsapp/>
        </a>
        <a href="https://www.instagram.com/iam_yasserr/"    target={`_blank`}>
          <BsInstagram/>
        </a>
 
    </div>
  )
}
