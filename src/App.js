import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import MenuList from './component/menu';
import AdminAddProduct from './component/admin';
import Cart from './component/cart';
import Login from './component/userlogin'; // Import the Login component

function App() {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to calculate the total price of the items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0); // Convert to number using parseFloat
  };

  // Function to handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add some items before proceeding to checkout.');
      return;
    }
    console.log('Proceeding to checkout...');
    alert(`Thank you for your purchase! Your total is $${calculateTotal().toFixed(2)}.`);
    setCart([]); // Clear the cart after checkout
  };

  return (
    <BrowserRouter>
      <header className="navbar">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/cart">Cart ({cart.length})</Link></li>
            <li><Link to="/login">Login</Link></li> {/* Add Login to Navbar */}
          </ul>
        </nav>
      </header>

      <Routes>
        {/* Ensure Home is the default landing page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuList addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminAddProduct />} />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              calculateTotal={calculateTotal} 
              handleCheckout={handleCheckout} 
            />
          } 
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
