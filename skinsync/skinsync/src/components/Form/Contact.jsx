import React, { useState } from 'react';
import axiosInstance from "../../config/axiosConfig"; // Ensure you have this config set up
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/contact/create', formData);
      toast.success(response.data.msg);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        comment: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <ToastContainer />
      <div className="container mx-auto px-4">
        
       
        {/* Get In Touch Section */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-500 mt-2">We would love to hear from you.</p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 flex flex-wrap justify-center items-center">
          {/* Contact Information */}
          <div className=" text-white border rounded-lg p-6 shadow-lg w-full sm:w-1/3 lg:w-1/4" style={{ color: '#8A5647' , borderColor:'#8A5647'}}>
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <p className="mt-4">
              <span className="font-bold">Phone:</span><br />
              +977-9801165960<br />
              01-5970680<br />
              (Sun to Fri, 9AM to 6PM)
            </p>
            <p className="mt-4">
              <span className="font-bold">Email:</span><br />
              skinsync@gmail.com
            </p>
            <p className="mt-4">
              <span className="font-bold">Address:</span><br />
              PCPS, Kupandole, Lalitpur
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-2/3 lg:w-1/2 mt-8 sm:mt-0 sm:ml-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded"
                  required
                />
              </div>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="mt-6 p-3 border border-gray-300 rounded w-full"
              />
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Your Message"
                className="mt-6 p-3 border border-gray-300 rounded w-full h-32"
                required
              />
              <button
                type="submit"
                className="mt-6  text-white px-4 py-2 border rounded w-full " style={{ color: '#8A5647' , borderColor:'#8A5647'}}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section
        <div className="mt-16 text-center text-gray-500">
          <p>&copy; 2024 SkinSync. All Rights Reserved. | Privacy | Terms | Cookies</p>
        </div> */}
      </div>
    </div>
  );
};

export default ContactPage;
