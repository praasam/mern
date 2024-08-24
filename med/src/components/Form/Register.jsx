import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-6xl mx-auto my-8 md:my-16 p-8 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src="/register.jpg" alt="Register illustration" className="h-full w-full object-cover rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h1 className="text-2xl mb-6 mt-2 md:mt-0 text-center font-bold">Register Here</h1>
          <form className="flex-grow">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border p-2 w-full"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                className="border p-2 w-full"
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                Contact Number
              </label>
              <input
                className="border p-2 w-full"
                type="text"
                name="contact"
                id="contact"
                placeholder="Enter your contact number"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border p-2 w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border p-2 w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
