import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src="./inven_logo.png" alt="Inventory Logo" className="h-10" />
            <h1 className="text-2xl font-bold" style={{color: '#002E6E' }}>Inventory</h1>
          </div>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Solutions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Resources</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Company</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Support</a></li>
          </ul>
          <div className="flex space-x-6">
          <button className="px-4 py-2 border rounded-md" style={{ color: '#002E6E', borderColor: '#002E6E' }}>Login</button>
            <button className="px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#002E6E' }}>Signup</button>
            {/* <ul>
            <li><Link to="/login" className="px-4 py-2 border border-blue-500 rounded-md" style={{color: '#002E6E' }}>Log In</Link></li>
            <li><Link to="/register" className="px-4 py-2 border border-blue-500 rounded-md" style={{color: '#002E6E' }}>Sign up</Link></li>
            </ul> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#F2EDE8' }}>
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center text-center md:text-left">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-4xl font-bold mb-4" style={{ color: '#002E6E' }}>Manage less. <br/> Sell more. <br/> Connect everything.</h2>
      <p className="text-gray-600 mb-8">Product businesses need more than inventory management to grow.
Connected Inventory Performance automatically creates a real-time picture of
everything you make and sell, everywhere you need it – across systems,
channels, marketplaces and regions.</p>
      <button className="px-8 py-4 text-white rounded-md" style={{backgroundColor: '#002E6E'}}>Let's work together</button>
    </div>
    <div className="md:w-1/2 flex justify-center md:justify-end">
      <img src="./inven_home.png" alt="Inventory Management" className="max-w-full md:max-w-lg h-auto" />
    </div>
  </div>
</section>




      {/* Stats Section */}
      <section style={{ padding: '50px 20px', height: 'auto' }}>
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4" style={{ color: '#002E6E' }}>
      Sell products anywhere. <br />Drive performance everywhere.
    </h2>
    <div className="flex flex-col md:flex-row justify-around items-center md:items-start">
      <div className="text-center mb-4 md:mb-0">
        <img src="./icon1.png" className="mx-auto mb-2" alt="Orders per year icon"/>
        <h3 className="text-2xl font-bold" style={{ color: '#002E6E' }}>125+ million</h3>
        <p className="text-gray-600">Orders per year</p>
      </div>
      <div className="text-center mb-4 md:mb-0">
        <img src="./icon2.png" className="mx-auto mb-2" alt="Cin7 customers icon"/>
        <h3 className="text-2xl font-bold" style={{ color: '#002E6E' }}>8,000+</h3>
        <p className="text-gray-600">Cin7 customers</p>
      </div>
      <div className="text-center">
        <img src="./icon3.png" className="mx-auto mb-2" alt="Gross merchandise value icon"/>
        <h3 className="text-2xl font-bold" style={{ color: '#002E6E' }}>35+ billion</h3>
        <p className="text-gray-600">Gross merchandise value</p>
      </div>
    </div>
  </div>
</section>

<div className="flex flex-col items-center justify-center min-h-[70vh] py-6 px-4" style={{ backgroundColor: '#F2F6FC' }}>
  <h1 className="text-3xl font-bold text-center mb-5">
    "Comprehensive Solutions for Maintenance and <br /> Reliability Optimization"
  </h1>
  <p className="text-center mb-6">
    All the tools and features you need to simplify, organize, and optimize your Maintenance and Reliability team and operations.
  </p>
  <div className="flex flex-wrap gap-4 justify-center">
    <div className="w-[200px] h-[50px] flex items-center justify-center bg-white text-black border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none cursor-pointer">
      Work Order Management
    </div>
    <div className="w-[200px] h-[50px] flex items-center justify-center bg-white text-black border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none cursor-pointer">
      Preventive Maintenance
    </div>
    <div className="w-[200px] h-[50px] flex items-center justify-center bg-white text-black border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none cursor-pointer">
      Asset Management
    </div>
    <div className="w-[200px] h-[50px] flex items-center justify-center bg-white text-black border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none cursor-pointer">
      Parts & Inventory
    </div>
    <div className="w-[200px] h-[50px] flex items-center justify-center bg-white text-black border border-gray-300 rounded shadow hover:bg-gray-100 focus:outline-none cursor-pointer">
      Analytics
    </div>
  </div>
</div>






      {/* Features Section */}
      <section className="py-16 ml-10"  style={{ padding: '50px 20px', height: 'auto' }}>
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#002E6E' }}>Why Inventory?</h2>
    <div className="grid grid-cols-2 gap-6">
      <div className="flex items-center space-x-4">
        <svg className="w-10 h-10" style={{ color: '#002E6E' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l5.6-5.6L17 8l-7 7z" />
        </svg>
        <p>Connect your whole data ecosystem in one simple interface</p>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-10 h-10" style={{ color: '#002E6E' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l5.6-5.6L17 8l-7 7z" />
        </svg>
        <p>Sell into new channels and territories in a few clicks</p>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-10 h-10" style={{ color: '#002E6E' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l5.6-5.6L17 8l-7 7z" />
        </svg>
        <p>Save time and money with zero-touch automation</p>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-10 h-10" style={{ color: '#002E6E' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l5.6-5.6L17 8l-7 7z" />
        </svg>
        <p>Grow with over 700+ pre-built integrations and capabilities</p>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-10 h-10" style={{ color: '#002E6E' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l5.6-5.6L17 8l-7 7z" />
        </svg>
        <p>Different views based on user roles</p>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-10 h-10" style={{ color: '#002E6E' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l5.6-5.6L17 8l-7 7z" />
        </svg>
        <p>Item status, history, and transactions</p>
      </div>
      <div className="flex items-center space-x-4">
        <svg className="w-10 h-10" style={{ color: '#002E6E' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 15l-3-3 1.4-1.4L10 12.2l5.6-5.6L17 8l-7 7z" />
        </svg>
        <p>Delete, update, or export multiple items</p>
      </div>
    </div>
  </div>
</section>



      
      {/* Work Order Management Section */}
      <div className="flex items-center justify-center text-center py-12" style={{ backgroundColor: '#F2EDE8' }}>
  <div className="w-1/2 px-4">
    <h2 className="text-lg font-semibold" style={{ color: '#002E6E' }}>WORK ORDER MANAGEMENT</h2>
    <h1 className="text-4xl font-bold my-4">Easily complete work from anywhere</h1>
    <p className="text-lg mb-8" style={{ color: '#002E6E' }}>
      Check, manage, and complete Work Orders and Work Requests. Combine the ease of pen and paper with the benefits of modern technology.
    </p>
  </div>
  <div className="w-1/2 px-4">
    <img src="./work_order.png" alt="Devices" className="mx-auto" />
  </div>
</div>


<div className="flex flex-col items-center justify-center text-center p-12">
  <h2 className="text-3xl font-bold mb-4" style={{ color: '#002E6E' }}>Our Smart Asset & Data Management</h2>
  <p className="text-lg mb-12">
    Upgrade to an Asset Operations Management solution that gives every Maintenance and Reliability team the tools <br/> and information they need to run Operations efficiently and effectively.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="bg-white rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <img src="./card1.png" alt="Maintenance Management" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#002E6E' }}>Maintenance Management</h3>
        <p>
          This platform provides asset data capture, analysis, and reporting to streamline maintenance and reliability tasks.
        </p>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <img src="./card2.png" alt="Data Hub" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#002E6E' }}>Data Hub</h3>
        <p>
          The only purpose-built Data Platform. Asset Operations data hub to store, manage, and use asset data from any source.
        </p>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <img src="./card3.png" alt="Edge" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#002E6E' }}>Edge</h3>
        <p>
          Connected real-time data across on-premise and remote condition sensors monitoring.
        </p>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <img src="./card4.png" alt="Enterprise Asset Management" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#002E6E' }}>Enterprise Asset Management</h3>
        <p>
          Maximize asset performance with an Enterprise Asset Management platform for seamless asset operations.
        </p>
      </div>
    </div>
  </div>
</div>





      {/* Footer */}
      <footer className=" text-white py-16" style={{backgroundColor: '#002E6E'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h3 className="font-bold mb-4">Inventory</h3>
              <ul>
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>Inventory 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
