import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'; 
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
    
      {/* <nav className="bg-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <h1 className="text-xl font-bold" style={{ color: '#8A5647' }}>SkinSync</h1>
        </div>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products or brands"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div>
          <Link to="/login" className="text-white px-4 py-2 rounded-md" style={{ backgroundColor: '#8A5647' }}>Login</Link>
          {/* <Link to="/register" className="text-white px-4 py-2 rounded-md" style={{ backgroundColor: '#8A5647' }}>Register</Link> }
        </div>
      </nav> */}

      <div className="relative w-full h-screen">
  <img src="/skinsyncbg.jpg" alt="Hero" className="w-full h-full object-cover" />
  <div className="absolute inset-0 flex flex-col items-center justify-start pt-20">
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#8A5647' }}>
        Harmony in every drop,<br /> beauty in every glance.
      </h2>
    </div>
  </div>
</div>


      <div className="bg-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-8" style={{ color: '#8A5647' }}>Why Skincare Matters</h2>
        <div className="flex justify-around">
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Anti-Aging</h3>
            <p className="text-gray-700">A good routine slows down aging, reducing wrinkles and fine lines for a youthful appearance.</p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Confidence and Well-being</h3>
            <p className="text-gray-700">Glowing skin boosts confidence and self-esteem, while a regular routine promotes relaxation and self-care.</p>
          </div>
          <div className="max-w-xs">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Hydration and Nourishment</h3>
            <p className="text-gray-700">Proper skincare ensures skin stays hydrated and nourished, preventing dryness and flakiness while promoting a soft texture.</p>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 text-center mb-10">
        <h2 className="text-2xl font-bold mb-8" style={{ color: '#8A5647' }}>
          Brands You'll LOVE
        </h2>
        <Slider {...settings}>
          <div className="rectangle-container">           
            <div className="rectangle rectangle-2">
            </div>
            <div className="rectangle rectangle-3">
              <img src="/cetaphil.png" alt="Cetaphil" />
            </div>
          </div>

          <div className="rectangle-container">           
            <div className="rectangle rectangle-2">
            </div>
            <div className="rectangle rectangle-3">
              <img src="/cosrx.png" alt="COSRX" />
            </div>
          </div>

          <div className="rectangle-container">           
            <div className="rectangle rectangle-2">
            </div>
            <div className="rectangle rectangle-3">
              <img src="/mamaearth.png" alt="Mamaearth" />
            </div>
          </div>

          <div className="rectangle-container">            
            <div className="rectangle rectangle-2">
            </div>
            <div className="rectangle rectangle-3">
              <img src="/cerave.png" alt="CeraVe" />
            </div>
          </div>

          <div className="rectangle-container">            
            <div className="rectangle rectangle-2">
            </div>
            <div className="rectangle rectangle-3">
              <img src="/ordinary.png" alt="CeraVe" />
            </div>
          </div>
        </Slider>
      </div>
      <div  style={{ backgroundColor: '#D6BEA7' }}>
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="w-full md:w-1/2">
      <img src="/serum.jpg" alt="Promo" className="rounded-md" style={{ maxWidth: '300px', maxHeight: '300px', width: '100%', height: 'auto' }} />
    </div>
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-bold mb-4 text-white">Elevate your Skincare with us</h2>
      <p className="text-xl text-white mb-8">
        Our serum delivers concentrated active <br /> ingredients for intense hydration and a radiant glow.
      </p>
      <button className="text-white px-6 py-3 rounded-md text-lg" style={{ backgroundColor: '#8A5647' }}>
        Buy Now
      </button>
    </div>
  </div>
</div>


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

      <div className="text-center" style={{ backgroundColor: '#F2EAE8', marginBottom: '0' }}>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src="/experience.png" alt="App" className="rounded-md mx-auto" style={{ maxWidth: '400px' }} />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h1 className="text-6xl font-bold mb-4 mt-2" style={{ color: '#8A5647' }}>EXPERIENCE</h1>
              <h2 className="text-4xl font-bold mb-4 text-black">OUR APP</h2>
              <p className=" text-gray-700 mb-4">Where shopping for your favorite skincare products becomes an exhilarating
                adventure! Prepare to embark on a journey that combines the joy of discovering new
                trends with the convenience of online shopping. Our app is designed to immerse you
                in a world of glamour, making your experience not only seamless but also fun and
                exciting.</p>

                  <br></br>
                <p>
                Unlock exclusive offers and rewards as you explore the app, enhancing your
                shopping experience even further. Browse through a wide range of premium skincare
                brands and products, all carefully curated to satisfy your every desire. 
                </p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white py-12">
  <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#8A5647' }}>
    Shop by Category
  </h2>
  <div className="flex justify-center flex-wrap">
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-4 mb-8 transform transition duration-300 hover:scale-105" style={{ width: '250px' }}>
      <img src="/cleanser.png" alt="Face Wash" className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Cleanser</h3>
        <p className="text-gray-700">Deep cleanse and refresh your skin with our face washes.</p>
      </div>
    </div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-4 mb-8 transform transition duration-300 hover:scale-105" style={{ width: '250px' }}>
      <img src="/serum.png" alt="Serums" className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Serum</h3>
        <p className="text-gray-700">Achieve glowing skin with our powerful serums.</p>
      </div>
    </div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-4 mb-8 transform transition duration-300 hover:scale-105" style={{ width: '250px' }}>
      <img src="/moisturizer.png" alt="Moisturizers" className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Moisturizer</h3>
        <p className="text-gray-700">Keep your skin hydrated and smooth with our moisturizers.</p>
      </div>
    </div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-4 mb-8 transform transition duration-300 hover:scale-105" style={{ width: '250px' }}>
      <img src="/sunscreen.png" alt="Sunscreens" className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#8A5647' }}>Sunscreen</h3>
        <p className="text-gray-700">Protect your skin from harmful UV rays with our sunscreens.</p>
      </div>
    </div>
  </div>
</div>




      <div className="container mx-auto mt-6 py-6" style={{ backgroundColor: '#FFF9F4'}}>
  <div className="flex flex-wrap justify-between items-center">
    <div className="w-full md:w-2/3 pl-10" >
      <h3 className="text-4xl font-bold mb-2 text-gray-800" style={{ color: '#8A5647' }}>Find Your Perfect Match</h3>
      <p className="text-gray-600">
        Unlock your beauty potential with our free consultations. Our expert team will help you 
        find the perfect beauty and skincare products for your unique needs. Say goodbye to 
        beauty confusion and hello to a personalized routine that's as unique as you are! Discover
        your ideal match and embrace a personalized beauty routine that leaves you feeling 
        confident and radiant.
      </p>
    </div>
    <div className="w-full md:w-1/3 flex justify-end space-x-4 pr-10">
      <button className="px-4 py-2  text-white rounded hover:bg-brown-600" style={{ backgroundColor: '#8A5647' }}>Have Enquiries? Call Us</button>
      <button className="px-4 py-2 bg-white text-[#8A5647] border border-[#8B4513] rounded hover:bg-gray-200">
  Email your Queries
</button>
    </div>
  </div>
</div>

<footer className="bg-black py-6" style={{ backgroundColor: '#F7EDE4' }}>
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-black ml-20">Contact Us</h3>
            <p className="text-black ml-20">
              Email: skinsync@gmail.com<br />
              Phone: +977 9865431234 <br/>
              Address: PCPS, Kupandole, Lalitpur
            </p>
          </div>
          {/* <div>
            <h3 className="text-xl font-bold mb-2 text-black mr-20">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-black">Facebook</a>
              <a href="#" className="text-black">Instagram</a>
            </div>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
