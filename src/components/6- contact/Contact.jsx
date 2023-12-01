import React, { useEffect } from "react";
import Lottie from "lottie-react";
import success from "../../../public/animations/Animation - 1700556299274.json";
import email from "../../../public/animations/Animation - 1700559943396.json";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "./contact.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("mwkdjzoo");

  useEffect(() => {
    const func = () => {
      return setTimeout(() => {
        window.location.reload();
      }, 5000);
    };
    if (state.succeeded) {
      func();
    }
  }, [state]);

  return (
    <section className="contact" id="contact">
      <div className="headline">
        <h2 className="flex">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
          Email Me
        </h2>
        <p>
          Email me for more information and get a <br /> response as soon as
          possible
        </p>
      </div>
      <div className="flex section-data">
        <form className="flex" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" id="email" name="email" autoComplete="off" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex">
            <label htmlFor="message">Your Message:</label>
            <textarea required id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "submitting...":"submit"}
          </button>
          {state.succeeded && (
            <p className="flex"><Lottie animationData={success} loop={false} /> Message sent successfully, Thanks for contacting me!</p>
          )}
        </form>
        <div className="animation" style={{marginBottom: 100}}><Lottie style={{height:300}} animationData={email} /></div>
      </div>
    </section>
  );
};

export default Contact;
