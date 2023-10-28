
import React, { useRef, useState } from 'react';
import './contactUs.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp ,BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { PuffLoader
} from 'react-spinners'


export default function ContactUs() {

  const form = useRef();
  const [isSent, setIsSent] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);
  
  // State variables to track each input's validation status and warning messages
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);


const validateForm = () => {
  const nameInput = form.current.querySelector('input[name="name"]');
  const emailInput = form.current.querySelector('input[name="email"]');
  const messageInput = form.current.querySelector('textarea[name="message"]');
  
  const isNameValid = nameInput.value.trim() !== '';
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailInput.value);
  const isMessageValid = messageInput.value.trim() !== '';
  
  // Update the validation status for each field
  setNameValid(isNameValid);
  setEmailValid(isEmailValid);
  setMessageValid(isMessageValid);
  
  // Update the overall form validation
  setIsFormValid(isNameValid && isEmailValid && isMessageValid);
};

 
  const handleFormSubmit = async () => {
    setIsSent(false);
    try {
      await emailjs.sendForm(
        'service_dnf0oon',
        'template_1pk2kbi',
        form.current,
        'VC8TWl0_RNSG2LJiE'
      );
      setIsSent(true);
      form.current.reset();
      // Add code to show a success message to the user
    } catch (error) {
      setIsSent(true);
      // Add code to show an error message to the user
    }
  };
  
  return (
   <>
      
       
        <section id='contact' className='position-relative container  text-center py-5'>
             <h5 className='my-4'>Get In Touch</h5>
             <h2 className='my-3'>Contact Me</h2>

             <div className="  contact_contaner ">
              <div className="row">


              <div className="contact_options col-12 col-md-4 z-3">
         
             

                <article className='contact_option'>
                  <MdOutlineEmail className='contact_option_icon'/>
                    <h4>Email</h4>
                    <h5 className=''>yasserrmohammed44@gmail.com</h5>
                    <a href="mailto:yasserrmohammed44@gmail.com">Send a message</a>
                </article>
            


                <article className='contact_option'>
                  <BsWhatsapp className='contact_option_icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+201094991544</h5>
                    <a href="https://wa.me/+201094991544" target="_blank">Chat on WhatsApp</a>

                </article>
                

              


                <article className='contact_option'>
                  <BsLinkedin className='contact_option_icon'/>
                    <h4>Linkedin</h4>
                    <h5>Yasser Mohamed</h5>
                    <a href='https://www.linkedin.com/in/yasser-mohamed-5ba73a198/'>Send a message</a>
                </article>

              
              </div>
              <div className="col-12 col-md-8  mb-5 p-5 d-flex align-items-center">





              <form ref={form}>
                <div className="row gap-4  ">
                  <input type="text" name="name" placeholder="Enter Full Name" required onBlur={validateForm} />
                  {!nameValid && <p className="warning-message">Please enter your name.</p>}
                  
                  <input type="email" name="email" placeholder="Your Email" required onBlur={validateForm} />
                  {!emailValid && <p className="warning-message">Please enter a valid email address.</p>}
                  
                  <textarea name="message" placeholder="Your Message" rows="7" required onBlur={validateForm} />
                  {!messageValid && <p className="warning-message">Please enter your message.</p>}
                  
                  <div className="">
                    {isSent ? (
                      <button className="glow-on-hover" type="button" onClick={handleFormSubmit} disabled={!isFormValid}>
                        Send Message
                      </button>
                    ) : (
                      <div className='d-flex align-items-center'>
                        <PuffLoader color="#4CBB17" size={65} speedMultiplier={1} />
                        <p>Sending your message....</p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
              </div>
             </div>
             </div>

        </section>
   
   </>
  )
}
