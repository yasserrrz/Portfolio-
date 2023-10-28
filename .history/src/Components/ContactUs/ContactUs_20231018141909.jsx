import React from 'react'
import './contactUs.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp ,BsLinkedin} from 'react-icons/bs'

export default function ContactUs() {
  return (
   <>
      
       
        <section id='contact' className='position-relative'>
             <h5>Get In Touch</h5>
             <h2>Contact Me</h2>

             <div className="contaner contact_contaner ">
              <div className="row">


              <div className="contact_options col-5 z-3">
                <article className='contact_option'>
                  <MdOutlineEmail/>
                    <h4>Email</h4>
                    <h5>yasserrmohammed44@gmail.com</h5>
                    <a href="mailto:yasserrmohammed44@gmail.com">Send a message</a>
                </article>
                <article className='contact_option'>
                  <BsWhatsapp/>
                    <h4>WhatsApp</h4>
                    <h5>+201094991544</h5>
                    <a href="https://api.whatsapp.com/send?phone=+201094991544" target="_blank">Chat on WhatsApp</a>

                </article>
                <article className='contact_option'>
                  <BsLinkedin/>
                    <h4>Linkedin</h4>
                    <h5>Yasser Mohamed</h5>
                    <a href='https://www.linkedin.com/in/yasser-mohamed-5ba73a198/'>Send a message</a>
                </article>

              </div>
              
             </div>
             </div>

        </section>
   
   </>
  )
}
