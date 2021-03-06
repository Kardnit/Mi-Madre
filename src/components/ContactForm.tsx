import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_93ktpkj', 'template_399d30q', form.current, 'I8EJja-kT86LwuY8j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;