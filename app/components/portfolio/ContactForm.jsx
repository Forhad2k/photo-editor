"use client";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  const formRef = useRef(null);

  const sendEmail = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    const templateParams = {
      user_name: form.user_name.value,
      user_email: form.user_email.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(
        "service_hmlk13j",
        "template_j83tdcu",
        templateParams,
        "rjiEo2WbwurVOiRFr",
      );
      toast.success("Email sent successfully");
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email");
    }
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex w-full flex-col gap-3"
      >
        <label className="sr-only" htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          type="text"
          name="user_name"
          placeholder="Your name"
          autoComplete="name"
          required
          className="rounded-sm border border-[#d8d9d0] bg-transparent px-4 py-3.5 text-sm outline-none transition placeholder:text-[#85867d] focus:border-[#849548] focus:bg-white"
        />
        <label className="sr-only" htmlFor="contact-email">Your email</label>
        <input
          id="contact-email"
          type="email"
          name="user_email"
          placeholder="Your email"
          autoComplete="email"
          required
          className="rounded-sm border border-[#d8d9d0] bg-transparent px-4 py-3.5 text-sm outline-none transition placeholder:text-[#85867d] focus:border-[#849548] focus:bg-white"
        />
        <label className="sr-only" htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project"
          required
          className="min-h-32 resize-y rounded-sm border border-[#d8d9d0] bg-transparent px-4 py-3.5 text-sm outline-none transition placeholder:text-[#85867d] focus:border-[#849548] focus:bg-white"
        />
        <button
          type="submit"
          className="rounded-sm bg-[#20211e] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#41433b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#849548]"
        >
          Send message
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </>
  );
}
