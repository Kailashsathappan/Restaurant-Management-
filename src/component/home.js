import React from "react";
import { Link } from "react-router-dom";
import './homee.css';

const Home = () => {
    return (
        <div>
            <div>
                <p className="head">Indian Restaurant</p>
            </div>
            <div>
                <p className="logo">Tummy Treats</p>
            </div>
            <div>
                <p className="font">EAT DRINK VISIT</p>
            </div>
            <div className="btn-container">
                <div className="btn">
                    <Link to="/menu">
                        <button>ORDER NOW</button>
                    </Link>
                </div>
                <div className="btn login-btn">
                    <Link to="/login">
                        <button>LOGIN</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
