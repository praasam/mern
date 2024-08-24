import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../Cart/CartContext'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

const DashComponent = () => {
  const [products, setProducts] = useState([]);
  const [chosenProducts, setChosenProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const { addToCart } = useCart(); 

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/api/products/all");
      const products = response.data || [];
      setProducts(products);

      const shuffledProducts = products.sort(() => 0.5 - Math.random());

      setChosenProducts(shuffledProducts.slice(0, 6));

      const remainingProducts = shuffledProducts.slice(6);
      setBestSellingProducts(remainingProducts.sort(() => 0.5 - Math.random()).slice(0, 6));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    try {
      addToCart(product);
      toast.success(`Rs.{product.name} added to cart!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="bg-white">
      <ToastContainer />

      {/* Carousel */}
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div className="h-90 overflow-hidden">
          <img src="ordinary_carousel.jpg" alt="Another slide" />
        </div>
        <div className="h-90 overflow-hidden">
          <img src="cetaphil_carousel.png" alt="Another slide" />
        </div>
        <div className="h-90 overflow-hidden">
          <img src="cosrx_carousel.jfif" alt="Another slide" />
        </div>
      </Carousel>

      {/* Chosen For You */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Chosen For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {chosenProducts.map((product) => (
            <div key={product._id} className="bg-white p-4 border border-gray-200 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                src={product.productImage}
                alt={product.name}
                className="w-full h-32 object-cover mb-2"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.description}</p>
              <p className="text-pink-500">Rs.{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 px-4 py-2 border border-[#8A5647] text-[#8A5647] rounded-md bg-transparent hover:bg-[#8A5647] hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                <span className="whitespace-nowrap">Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Best Skincare Deals */}
      <div className="bg-white py-12">
        <h2 className="text-2xl font-bold ml-10 mb-5" style={{ color: '#8A5647' }}>
          Best Skincare Deals
        </h2>
        <Slider {...settings}>
          <div className="px-4">
            <img src="/cosrx.jpg" alt="Product 1" className="w-full rounded-md mb-4" />
            <h3 className="text-xl font-semibold" style={{ color: '#8A5647' }}>COSRX</h3>
            <p className="text-gray-700">Hydrate Your Skin Confidently</p>
          </div>
          <div className="px-4">
            <img src="/ordinary.jpg" alt="Product 2" className="w-full rounded-md mb-4" />
            <h3 className="text-xl font-semibold" style={{ color: '#8A5647' }}>The Ordinary</h3>
            <p className="text-gray-700">Effective Solutions for Beautiful Skin</p>
          </div>
          <div className="px-4">
            <img src="/mamaearth.jpg" alt="Product 3" className="w-full rounded-md mb-4" />
            <h3 className="text-xl font-semibold" style={{ color: '#8A5647' }}>Mamaearth</h3>
            <p className="text-gray-700">Skin Care, the Natural Way</p>
          </div>
          <div className="px-4">
            <img src="/cetaphil.jpg" alt="Product 4" className="w-full rounded-md mb-4" />
            <h3 className="text-xl font-semibold" style={{ color: '#8A5647' }}>Cetaphil</h3>
            <p className="text-gray-700">Gentle Care for All Skin Types</p>
          </div>
        </Slider>
      </div>

      {/* Best Selling */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {bestSellingProducts.map((product) => (
            <div key={product._id} className="bg-white p-4 border border-gray-200 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                src={product.productImage}
                alt={product.name}
                className="w-full h-32 object-cover mb-2"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-pink-500">Rs.{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 px-4 py-2 border border-[#8A5647] text-[#8A5647] rounded-md bg-transparent hover:bg-[#8A5647] hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                <span className="whitespace-nowrap">Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </section>

       {/* Shop by Category */}
       <div className="bg-white py-12">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#8A5647' }}>
          Shop by Category
        </h2>
        <div className="flex justify-center flex-wrap">
          <Link to="/cleanser" className="bg-white shadow-md rounded-lg overflow-hidden mx-4 mb-8 transform transition duration-300 hover:scale-105" style={{ width: '250px' }}>
            <img src="/cleanser.png" alt="Face Wash" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Cleanser</h3>
              <p className="text-gray-700">Keep your skin clean and fresh with our gentle cleansers.</p>
            </div>
          </Link>
         
          <Link to="/serum" className="bg-white shadow-md rounded-lg overflow-hidden mx-4 mb-8 transform transition duration-300 hover:scale-105" style={{ width: '250px' }}>
            <img src="/serum.png" alt="Face Serum" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Serum</h3>
              <p className="text-gray-700">Enhance your skin with our targeted treatment serums.</p>
            </div>
          </Link>
          <Link to="/moisturizer" className="bg-white shadow-md rounded-lg overflow-hidden mx-4 mb-8 transform transition duration-300 hover:scale-105" style={{ width: '250px' }}>
            <img src="/moisturizer.png" alt="Moisturizer" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Moisturizer</h3>
              <p className="text-gray-700">Hydrate and nourish your skin with our moisturizers.</p>
            </div>
          </Link>
          <Link to="/sunscreen" className="bg-white shadow-md rounded-lg overflow-hidden mx-4 mb-8 transform transition duration-300 hover:scale-105" style={{ width: '250px' }}>
            <img src="/sunscreen.png" alt="Sunscreen" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Sunscreen</h3>
              <p className="text-gray-700">Protect your skin with our broad-spectrum sunscreens.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 py-6 bg-gray-100 text-center">
        <p>© 2024, The SkinSync Team™ - <a href="#" className="text-black">Refund policy</a> - <a href="#" className="text-black">Privacy policy</a> - <a href="#" className="text-black">Terms of service</a></p>
      </footer>
    </div>
  );
};

export default DashComponent;
