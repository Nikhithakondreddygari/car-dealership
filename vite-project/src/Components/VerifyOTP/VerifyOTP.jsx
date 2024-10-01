import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./VerifyOTP.css";
import axios from "axios";

const VerifyOTP = () => {
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const param = useLocation();
  useEffect(() => {
    setUserEmail(param.state.email);
  }, [param]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3030/verify-otp", {
        email:userEmail,
        otp,
      });
      if (response.status === 200) {
        setMessage(response.data.message);
        alert("OTP verified successfully");
        navigate("/home", { state: { email : userEmail } });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage(error.response.data.error || "error verifying otp");
    }
  };

  return (
    <div className="forgetcontainer">
      <div className="form1-container">
        <div className="formcont1">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            Enter OTP here
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="password">Enter Your OTP</label>
              <input
                className="input"
                id="otp"
                name="otp"
                type="text"
                autoComplete="one-time-code"
                required
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <div className="bcklnk">
            <NavLink to="/loginwithotp" className="back-link">
              Back
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
