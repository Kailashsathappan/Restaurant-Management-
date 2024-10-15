import React, { useState } from "react";
import axios from "axios";
import "./admin.css";

// Admin Page Component for Login and Adding Products
const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleLogin = () => {
    if (username === "Kailash" && password === "Kailu") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!name || !price || !description || !imageUrl) {
      alert("Please fill out all fields");
      return;
    }

    axios
      .post("http://localhost:5000/api/products/add", {
        name,
        price,
        description,
        imageUrl,
      })
      .then(() => {
        alert("Product added successfully!");
        setName("");
        setPrice("");
        setDescription("");
        setImageUrl("");
      })
      .catch((error) => {
        console.error("There was an error adding the product!", error);
      });
  };

  return (
    <div>
      {!loggedIn ? (
        <div className="login-form">
          <h2>Admin Login</h2>
          <div>
            <label>Username:</label>
            <br />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}</h2>
          <form className="form" onSubmit={handleAddProduct}>
            <h2 className="add">Add New Product</h2>

            <div>
              <label>Name:</label>
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <label>Price:</label>
              <br />
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <label>Description:</label>
              <br />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <label>Image URL:</label>
              <br />
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>
            <br />

            <button type="submit">Add Product</button>
            <button onClick={handleLogout}>Logout</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
