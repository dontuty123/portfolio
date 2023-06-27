/** @format */

import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Address from "../../img/address.png";
import Mail from "../../img/mail.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_l2xz1cf", "template_cp0422e", formRef.current, "xH3nC7htjN1cC13vy").then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss more!!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +84 989 901 328
            </div>
            <div className="c-info-item">
              <img src={Mail} alt="" className="c-icon" />
              phamtrithuc22022000@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              1472 Vo Van Kiet Street, Sard 3, District 6, Ho Chi Minh City
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Leave a message if you have any question or you just want to tell some one about
            your ranny day, I'll be right here.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you. . ."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
