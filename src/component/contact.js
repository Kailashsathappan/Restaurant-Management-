import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-details">
          <h1>Tummy Treats</h1>
          <h1>Get in Touch</h1>
          <p><b>"Eat Well, Live Well"</b></p>
          <p><b>Your body is a temple, and the food you choose is the foundation. By eating well, you create a life filled with energy, joy, and balance. Let every dish be a reminder that nourishing yourself is the first step toward a fulfilling life.</b></p>
          <p><b>We would love to hear from you!</b></p>
          <ul>
            <li><strong>Phone:</strong>9345612204</li>
            <li><strong>Email:</strong> tummytreats@restaurant.com</li>
            <li><strong>Address:</strong>ccet puliyur,karur</li>
          </ul>
        </div>
        <div className="contact-form">
          <h3 className='send'>Send Us a Message</h3>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Mobile:
              <input type="int" name="mobile" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="5" required />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="map-container">
        <center><h1 className='loc'>Restaurant Location</h1></center>
        <center><h2>Visit Us</h2></center>
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.1861521649514!2d78.0653651749131!3d10.957264992182785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa6e24776ba75b%3A0x9b2b16ed7ebf1c59!2sChettinad%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1697209566721!5m2!1sen!2sin"
          width="100%"
          height="400">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
