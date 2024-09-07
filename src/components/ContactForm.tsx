import React, { useState, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.API_URL}/sendMail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.log("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const gridStyle = {
    background: "#fff3cf",
    borderRadius: "10px",
    padding: "1rem",
  };

  const inputStyle = {
    backgroundColor: "#e3d8b1",
    borderColor: "transparent",
    color: "#333",
    marginBottom: "1rem",
  };

  return (
    <div className='container my-5'>
      <h2 className='heading-color ubBold'>Contact Us</h2>
      <hr className='text-white' />
      <div className='row' style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className='col-md-12'>
          <div style={gridStyle}>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  style={inputStyle}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  style={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  style={inputStyle}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className='gap-2'>
                <button type='submit' className='btn btn-dark btn-block'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
