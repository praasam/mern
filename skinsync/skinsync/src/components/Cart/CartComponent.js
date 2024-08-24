import React from 'react';
import { useCart } from '../Cart/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '@heroicons/react/solid';

const CartComponent = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const navigate = useNavigate();

  const handleRemoveItem = async (productId) => {
    console.log('Attempting to remove item:', productId);
    try {
      await removeFromCart(productId); // Ensure this function is correct
      toast.success('Item removed from cart');
    } catch (error) {
      console.error('Error removing item:', error);
      toast.error('Failed to remove item from cart');
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    console.log('Attempting to update quantity for item:', productId, 'to:', newQuantity);
    if (newQuantity < 1) return; // Prevent negative quantities
    try {
      await updateCartItemQuantity(productId, newQuantity);
      toast.success('Quantity updated');
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Failed to update quantity');
    }
  };

  const handleCheckout = () => {
    const cartData = cart.map(item => ({
      productId: item.product._id,
      name: item.product.name,
      quantity: item.quantity,
      price: item.price,
    }));

    navigate('/checkout', { state: { cart: cartData } });
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.product._id} className="border-b border-gray-200 py-4 flex items-center">
                <img
                  src={item.product.productImage}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-gray-500">{item.product.description}</p>
                  <p className="text-lg font-bold mt-2">Rs.{item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="flex flex-col items-end ml-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleRemoveItem(item.product._id)}
                      className="p-2 text-red-500 hover:text-red-600 transition duration-300"
                      aria-label="Delete item"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
                      className="p-2 text-blue-500 hover:text-blue-600 transition duration-300"
                      aria-label="Increase quantity"
                    >
                      <PlusCircleIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleUpdateQuantity(item.product._id, item.quantity - 1)}
                      className="p-2 text-yellow-500 hover:text-yellow-600 transition duration-300"
                      aria-label="Decrease quantity"
                    >
                      <MinusCircleIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 text-lg font-bold">
              Total: Rs.{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </div>
            <button
              onClick={handleCheckout}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartComponent;
