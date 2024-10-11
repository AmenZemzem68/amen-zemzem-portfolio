import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_fdc4x2j",
        "template_2hzvn9b",
        {
          from_name: form.name,
          to_name: "Amen Zemzem",
          from_email: form.email,
          to_email: "zemzemamen68@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        "dP1EHX3yqdgA32-ih"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contac container section" id="contact">
      <h2 className="section-title">Contact.</h2>
      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Let's work together!</h3>
          <p className="contact-details">Don't like forms? Send me an email.</p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="contact-form-input"
                placeholder="What's your name?"
              />
            </div>
            <div className="contact-form-div">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="contact-form-input"
                placeholder="What's your email address?"
              />
            </div>
            <div className="contact-form-div">
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="contact-form-input"
                placeholder="What's the subject?"
              />
            </div>
            <div className="contact-form-div">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                cols={30}
                rows={10}
                className="contact-form-input"
                placeholder="What do you want to say?"
              ></textarea>
            </div>
            <button className="btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default contact;
