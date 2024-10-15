import React from 'react';
import './cart.css'; 

const Cart = ({ cart, calculateTotal, handleCheckout, handleClearCart }) => {
  return (
    <div className="cart-container">
      <h2 style={{color:'white'}}>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} - <span className="item-price">${item.price}</span>
              </li>
            ))}
          </ul>

          <h3 className="cart-total">Total: ${calculateTotal()}</h3>
          <div className="cart-buttons">
            <button className="btn order-btn" onClick={() => {
              handleCheckout();
              alert('Your order is done');
            }}>
              Order
            </button>
            <button className="btn clear-btn" onClick={handleClearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
