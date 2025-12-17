import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const isFormValid =
    formData.firstname &&
    formData.lastname &&
    formData.email &&
    formData.message;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill out all required fields");
      return;
    }

    toast.success("Your message has been sent!");

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="contact-page">
      <ToastContainer position="top-right" autoClose={3000} />

      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Need to get in touch? Contact Us!</h1>

        <label className="form-label">First Name</label>
        <input
          className="form-input"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />

        <label className="form-label">Last Name</label>
        <input
          className="form-input"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />

        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="form-label">Leave Us a Message</label>
        <textarea
          className="form-textarea"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message here..."
        />

        <button
          className="submit-button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
