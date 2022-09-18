import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser';
import './contact.scss';
import { useState } from 'react';

const Contact = () => {
  const {ref,inView} = useInView()
  const [message,setMessage] = useState(null);
  const [error,setError] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_otskrfl', 'template_87v20i9', form.current, 'NFtahAYpZfi6NRCS0')
      .then((result) => {
        setMessage('message successfully sent');
      }, (error) => {
        setMessage('failed to send message');
      });
      e.target.reset()
  };
  return (
    <div className='contact' id='contact'>
      <div className='title' ref={ref}>
        <span className={inView? 'h1 h1-anim':'h1'}>Write us a letter</span>
        <span className={inView? 'p p-anim':'p'}>we appreciate your ideas</span>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor='name'>NAME</label>
        <input type="text" id='name' name='user_name' placeholder='Enter your name' required/>
        <label htmlFor='email'>EMAIL ADDRESS</label>
        <input type="text" id='email' name='user_email' placeholder='Enter your email address' required/>
        <label htmlFor='message'>YOUR MESSAGE</label>
        <textarea id='message' name='message' placeholder='your message'></textarea>
        <p>{message}</p>
        <button type='submit' className='btn' style={{marginTop:"2rem",width:"7rem"}}>Submit</button>
      </form>
    </div>

  )
}

export default Contact