import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from '../Cart/CartContext'; // Use useCart hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShopComponent = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { addToCart } = useCart(); // Use useCart hook to access addToCart

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("http://localhost:5000/api/products/all");
      const products = response.data || [];
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("http://localhost:5000/category/all");
      const categories = response.data || [];
      setCategories(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to fetch categories");
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      addToCart(product); // Call addToCart from useCart
      toast.success(`${product.name} added to cart`);
    } catch (error) {
      console.error("Error adding product to cart:", error.response ? error.response.data : error.message);
      toast.error("Failed to add product to cart");
    }
  };

  // Animation styles
  const fadeInUp = (index) => ({
    opacity: 0,
    transform: "translateY(20px)",
    animation: `fadeInUp 0.5s ease-in-out forwards ${index * 0.2}s`,
  });

  return (
    <div className="container mx-auto p-8">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Shop</h2>

        {/* Display Products */}
        <div>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={product._id}
                  className="border rounded-lg overflow-hidden shadow-md"
                  style={fadeInUp(index)} // Apply animation style
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.productImage} // Assuming `productImage` contains the URL of the product image
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" // Fit image and hover effect
                      style={{ objectFit: 'cover' }} // Ensure the image covers the container
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.description}</p>
                    <p className="text-xl font-bold mt-2">Rs. {product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-3 px-4 py-2 border border-[#8A5647] text-[#8A5647] rounded-md bg-transparent hover:bg-[#8A5647] hover:text-white transition-all duration-300 flex items-center space-x-2"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                      <span className="whitespace-nowrap">Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No products available</p>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ShopComponent;
