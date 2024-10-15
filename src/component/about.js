import React from "react";
import { Card, Col, Row } from "antd";
import Image1 from '../images/food.jpeg';
import  VegImage from '../images/food1.jpeg';
import NonVegImage from '../images/360_F_781885839_IXgQ0uTauCKygDCh3nfsvxfCwOpfnQtz.jpg';
import ChineseImage from '../images/ch.jpg';
import './about.css';
import { Color } from "antd/es/color-picker";

const About = () => {
  return (
    <Card style={{ backgroundColor: "transparent", border: "transparent" }}>
      <h4 className="about">About Us</h4>
      <Row>
        <Col span={12}>
          <p style={{ marginLeft: "2vh", marginRight: "2vh" }}>
          <h3 className="ab"><b>About Our Restaurant</b></h3>
            <p style={{color:'white'}}>
                <b>Welcome to Tummy Treats, where every dish tells a story. Our mission is to create a warm and inviting space that brings people together over delicious, freshly prepared meals. We believe in the power of good food and great company to create unforgettable memories.</b>
            </p>
            <h3 style={{color: 'white',textDecoration: 'underline'}}>
                <b>Our Employees</b>
            </h3>
            <p style={{ color: 'white' }}>
                <b>
                    Meet our dedicated team of culinary artists and hospitality experts. Each member of our staff is passionate about delivering exceptional service and ensuring that your dining experience is nothing short of extraordinary. With a commitment to excellence and a love for what they do, our employees make Tummy Treats a place you’ll want to return to time and again.
                </b>
            </p>


             
          </p>
        </Col>
        <Col span={2}></Col>
        <Col span={10}>
          <img src={Image1} className="about-image" alt="Food" />
        </Col>
      </Row>
      <Row className="food-container">
        <Col span={8}>
          <div className="food-category">
            <h3 className="food-heading">Veg</h3>
            <img src={VegImage} className="food-image" alt="Veg Food" />
          </div>
        </Col>

        <Col span={8}>
          <div className="food-category">
            <h3 className="food-heading">Non-Veg</h3>
            <img src={NonVegImage} className="food-image" alt="Non-Veg Food" />
          </div>
        </Col>

        <Col span={8}>
          <div className="food-category">
            <h3 className="food-heading">Chinese</h3>
            <img src={ChineseImage} className="food-image" alt="Chinese Food" />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default About;
