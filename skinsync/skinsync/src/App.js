import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import Login from "./components/Form/Login";
import Register from "./components/Form/Register";
import DashComponent from './components/Home/DashComponent';
import CategoryComponent from './components/Category/CategoryComponent';
import ContactPage from './components/Form/Contact';
import AddProductComponent from './components/Product/AddProductComponent';
import BrandComponent from './components/Brand/BrandComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import ShopComponent from './components/Shop/ShopComponent';
import CartComponent from './components/Cart/CartComponent';
import { CartProvider } from './components/Cart/CartContext'; // Import CartProvider
import ProtectedRoute from './ProtectedRoutes/ProtectedRoute'
import Moisturizer from './components/Category/Moisturizer';
import ProfileComponent from './components/Profile/profileComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category" element={<CategoryComponent />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product" element={<AddProductComponent />} />
            <Route path="/brand" element={<BrandComponent />} />
            <Route path="/dash" element={<DashComponent />} />
            <Route path="/shop" element={<ShopComponent />} />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/moisturizer" element={<Moisturizer />} />
            <Route path="/profile" element={<ProfileComponent />} />


            
            
            <Route 
              path="/contact" 
              element={
                <ProtectedRoute>
                  <ContactPage />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/shop" 
              element={
                <ProtectedRoute>
                  <ShopComponent />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/category" 
              element={
                <ProtectedRoute role="admin">
                  <CategoryComponent />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/product" 
              element={
                <ProtectedRoute role="admin">
                  <AddProductComponent />
                </ProtectedRoute>
              } 
            />

          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
