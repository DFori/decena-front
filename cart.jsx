import React from 'react';
import { useCart } from '../context/CartContext'; 
import './car.css';
function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Get the cart items and functions from context

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2); 

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>${item.price} x {item.quantity}</p> {/* Show quantity */}
              </div>
              <div className="cart-item-actions">
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
