import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_knqz0nq",
        "template_y44vzgq",
        form.current,
        "_-kViBNuEOYHhdngM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col justify-evenly h-full border-solid border-2 border-black w-1/2"
    >
      <div>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="border-2 border-solid border-black"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="border-2 border-solid border-black"
        />
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          className="border-2 border-solid border-black"
        />
      </div>
      <input
        type="submit"
        value="Send"
        className="border-2 border-solid border-black"
      />
    </form>
  );
};
