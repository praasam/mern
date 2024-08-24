import React, { useState } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = "Name is required";
    if (!formValues.message) tempErrors.message = "Message is required";
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      alert("Form submitted successfully!")
      // handle form submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-6xl mx-auto my-8 md:my-16 p-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 flex items-center justify-center md:justify-start">
            <img src="/contact.jpg" alt="Contact" className="w-full rounded-lg mt-10 md:mt-0" />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <div className="w-full p-4">
              <h2 className="text-3xl font-bold mb-2 text-center">Contact Us</h2>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="name">Your Name</label>
                  <input
                    className={`border border-black rounded-lg p-2 ${errors.name && 'border-red-500'}`}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="email">Email</label>
                  <input
                    className={`border border-black rounded-lg p-2 ${errors.email && 'border-red-500'}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-600">{errors.email}</p>}
                </div>
                <div className="flex flex-col">
                  <label className="text-xl mb-2" htmlFor="message">Message</label>
                  <textarea
                    className={`border border-black rounded-lg p-2 ${errors.message && 'border-red-500'}`}
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    rows="5"
                    value={formValues.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="text-red-600">{errors.message}</p>}
                </div>
                <button
                  className="bg-blue-500 md:w-1/2 text-white text-xl p-2 rounded-lg hover:bg-blue-700 mx-auto block"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="my-6 mb-0 mt-0" />

        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2 text-center md:text-left">Get in Touch</h2>
          <p className="text-lg mb-2 text-center md:text-left">Feel free to reach out. We're here to help!</p>
          <div className="mb-4">
            <p className="flex items-center mb-2">
              <span className="material-icons mr-2 font-bold">Phone:</span>
              +977 9867362789
            </p>
            <p className="flex items-center mb-2">
              <span className="material-icons mr-2 font-bold">Email:</span>
              contact@gmail.com
            </p>
            <p className="flex items-center mb-2">
              <span className="material-icons mr-2 font-bold">Location:</span>
              PCPS College, Kupandole
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
