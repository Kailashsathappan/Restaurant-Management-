import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import './menu.css';

const MenuList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);


  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <Row gutter={[8, 8]}>
        {products.map(product => (
          <Col key={product._id} span={6} xs={24} sm={12} md={8} lg={6}>
            <div className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuList;
