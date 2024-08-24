import React from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const { state } = useLocation();
  const { cart } = state || { cart: [] };

  // Example of handling cart data
  const handlePlaceOrder = async () => {
    try {
      // Place your order logic here, e.g., send cart data to the server
      console.log('Placing order with the following cart:', cart);
      // Clear cart and redirect if needed
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.length > 0 ? (
        <div>
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          {cart.map(item => (
            <div key={item.productId} className="border-b border-gray-200 py-2">
              <p>{item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}</p>
            </div>
          ))}
          <button
            onClick={handlePlaceOrder}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Place Order
          </button>
        </div>
      ) : (
        <p className="text-gray-500">No items in cart to checkout</p>
      )}
    </div>
  );
};

export default CheckoutPage;
