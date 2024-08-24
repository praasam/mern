import React from 'react';
import './App.css';
// import GreetComponent from './components/props/greetComponent.jsx';
// import GreetPraComponent from './components/props/greetPraComponent.jsx';
// import PrasamshaComponent from './components/props/PrasamshaComponent.jsx';
import NavbarComponent from './components/Navbar/NavbarComponent.jsx';
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';
import HomeComponent from './components/Home/HomeComponent.jsx';
import ShopComponent from './components/Shop/ShopComponent.jsx';
import AboutComponents from './components/About/AboutComponent.jsx';
import ProductComponent from './components/ProductComponent/ProductComponent.jsx';
import Login from './components/Form/Login.jsx';
import Register from './components/Form/Register.jsx';
import Contact from './components/Form/Contact.jsx';
import EventRegistration from './components/Form/EventRegistration.jsx';

function App() {
  return (
    <div className = "App">
    <Router>
      {/* <NavbarComponent/> */}
      
      <Routes>
      <Route path="/" element={<HomeComponent/>}/>
      <Route path="/shop" element={<ShopComponent/>}/>
      <Route path="/about" element={<AboutComponents/>}/>
      <Route path="/product" element={<ProductComponent/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/event" element={<EventRegistration/>}/>
      </Routes>
    </Router>
    </div>
  )
}
export default App;
