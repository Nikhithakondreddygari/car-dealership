import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Loginverify.css";
import axios from "axios";

const LoginVerify = () => {
  const [message, setMessage] = useState("");
  const [otp, setOTP] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send OTP and email to the backend for verification
      const response = await axios.post("http://localhost:3030/login", { email, otp });
      
      if (response.status === 200) {
        setMessage(response.data.message);
        alert("OTP verified successfully");
        navigate("/home", { state: { email } });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage(error.response?.data?.error || "Error verifying OTP");
    }
  };

  return (
    <div className="forgetcontainer">
      <div className="form1-container">
        <div className="formcont1">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            OTP has been sent to your registered email
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Enter your email</label>
              <input
                className="input"
                id="email"
                name="email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="otp">Enter your OTP</label>
              <input
                className="input"
                id="otp"
                name="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <NavLink to="/loginwithotp" className="back-link">
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginVerify;