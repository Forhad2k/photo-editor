"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';


const ContactForm = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();
  
    const templateParams = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };
  
    emailjs
    .send('service_hmlk13j', 'template_j83tdcu', templateParams, 'rjiEo2WbwurVOiRFr')
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
           toast.success('Email sent successfully');
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          toast.error('Failed to send email');
        }
      );
  
    e.target.reset(); // Clear the form after submission
  };
  

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md mx-auto">
      <input type="text" name="user_name" placeholder="Your Name" required className="border p-2 rounded" />
      <input type="email" name="user_email" placeholder="Your Email" required className="border p-2 rounded" />
      <textarea name="message" placeholder="Your Message" required className="border p-2 rounded h-32"></textarea>
      <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send Message</button>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </form>
  );
};

export default ContactForm;
