import React from 'react'
import './contactUs.css'
import {MdOutlineEmail} from 'react-icons/md'

export default function ContactUs() {
  return (
   <>
      
       
        <section id='contact'>
             <h5>Get In Touch</h5>
             <h2>Contact Me</h2>

             <div className="contaner contact_contaner com">

              <div className="contact_options z-3">
                <article className='contact_option'>
                  <MdOutlineEmail/>
                    <h4>Email</h4>
                    <h5>yasserrmohammed44@gmail.com</h5>
                    <a href="mailto:yasserrmohammed44@gmail.com">Send a message</a>
                </article>
                <article className='contact_option'>
                  <MdOutlineEmail/>
                    <h4>WhatsApp</h4>
                    <h5>yasserrmohammed44@gmail.com</h5>
                    <a href="https://api.whatsapp.com/send?phone=+201094991544" target="_blank">Chat on WhatsApp</a>

                </article>
                <article className='contact_option'>
                  <MdOutlineEmail/>
                    <h4>Email</h4>
                    <h5>yasserrmohammed44@gmail.com</h5>
                    <a href="mailto:yasserrmohammed44@gmail.com">Send a message</a>
                </article>

              </div>
              <form action=""></form>
             </div>
        </section>
   
   </>
  )
}
