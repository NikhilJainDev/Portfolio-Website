import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_965n3wc", "template_gxmvfn6", form.current, {
        publicKey: "3oRQQhMd4Qbmn53p3",
      })
      .then(
        () => {
          setSuccessMessage(true);
          setTimeout(() => setSuccessMessage(false), 3000);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {successMessage && (
        <div className="success-popup">Message Sent!</div>
      )}
      <div className="contact-content">
        <div className="contact-image">
          <img
            src="https://img.freepik.com/free-vector/flat-contact-us-background_23-2148178908.jpg"
            alt="Contact Us"
          />
        </div>
        <div className="contact-text">
          <b>
            <i>
              <h1> Get in Touch </h1>
            </i>
          </b>
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
            <a
              href="https://github.com/student-NikhilJain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrGmeBv3SOLSKz6OlTVlVYkfH9_W3BBgdrA&s"
                alt="Github"
              />
            </a>
            <a
              href="https://www.instagram.com/nikhiljain7342"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-jain-b49518277/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIbiofxGclX20CWBDtpmjOcbbuqEJS6PrSQ&s"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
