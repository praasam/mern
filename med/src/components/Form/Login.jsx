import React, { useState } from 'react';

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};

    // Email validation
    if (!formValues.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
    }

    // Password validation
    if (!formValues.password) {
      tempErrors.password = "Password is required";
    } else {
      if (formValues.password.length < 8) {
        tempErrors.password = "Password must be at least 8 characters long";
      }
      if (!/[A-Z]/.test(formValues.password)) {
        tempErrors.password = "Password must contain at least one uppercase letter";
      }
      if (!/[a-z]/.test(formValues.password)) {
        tempErrors.password = "Password must contain at least one lowercase letter";
      }
      if (!/[0-9]/.test(formValues.password)) {
        tempErrors.password = "Password must contain at least one digit";
      }
      if (!/[!@#$%^&*]/.test(formValues.password)) {
        tempErrors.password = "Password must contain at least one special character (!@#$%^&*)";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully");
      alert("submitted");
      // handle form submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src="/register.jpg" alt="Login illustration" className="h-full w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h1 className="text-2xl mb-5 text-center font-bold">Login Here!!</h1>
          <form onSubmit={handleSubmit} className="flex-grow">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`border p-2 w-full ${errors.email && 'border-red-500'}`}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={`border p-2 w-full ${errors.password && 'border-red-500'}`}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
