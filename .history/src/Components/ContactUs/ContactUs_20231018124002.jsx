import React from 'react'
import './contactUs.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp ,BsLinkedin} from 'react-icons/bs'

export default function ContactUs() {
  return (
   <>
      
       
        <section id='contact'>
             <h5>Get In Touch</h5>
             <h2>Contact Me</h2>

             <div className="contaner contact_contaner ">

              <div className="contact_options z-3">
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
              <form action="">
                <input type="text" name='name' placeholder='Enter Full Name' required/>
                <input type="email" name='email' placeholder='Your Email' required/>
                <textarea name="me" id="" cols="30" rows="10"></textarea>
              </form>
             </div>
        </section>
   
   </>
  )
}
