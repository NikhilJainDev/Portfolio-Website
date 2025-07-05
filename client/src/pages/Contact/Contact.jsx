import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("📨 sendEmail() called");

    try {
      const result = await emailjs.sendForm(
        "service_nl1hswv",           // ✅ Your EmailJS service ID
        "template_gxmvfn6",          // ✅ Your template ID
        form.current,
        {
          publicKey: "3oRQQhMd4Qbmn53p3", // ✅ Your public key
        }
      );

      console.log("✅ Email sent:", result.text);
      setSuccessMessage(true);
      form.current.reset();

      setTimeout(() => setSuccessMessage(false), 3000);
    } catch (error) {
      console.error("❌ Email sending failed:", error.text);
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 4000);
    }
  };

  return (
    <div className="contact-container">
      {successMessage && <div className="success-popup">✅ Message Sent!</div>}
      {errorMessage && <div className="error-popup">❌ Failed to send message</div>}

      <div className="contact-content">
        <div className="contact-image">
          <img
            src="https://media.istockphoto.com/id/1252809376/photo/japanese-man-at-hand-using-a-smartphone.jpg?s=612x612&w=0&k=20&c=3zUF1981mbU4mN3gmQ8IYWU96HAs1pPEN89WYKw5NAQ="
            alt="Contact Us"
          />
        </div>

        <div className="contact-text">
          <h1><i><b>Get in Touch</b></i></h1>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Name</label>
            <input type="text" name="from_name" required />
            <label>Email</label>
            <input type="email" name="from_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
          </form>

          <div className="social-icons">
            <a href="https://github.com/student-NikhilJain" target="_blank" rel="noopener noreferrer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrGmeBv3SOLSKz6OlTVlVYkfH9_W3BBgdrA&s" alt="Github" />
            </a>
            <a href="https://www.instagram.com/nikhiljain7342" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-jain-b49518277/" target="_blank" rel="noopener noreferrer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIbiofxGclX20CWBDtpmjOcbbuqEJS6PrSQ&s" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
