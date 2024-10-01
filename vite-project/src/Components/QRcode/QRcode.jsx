import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { InputText } from "primereact/inputtext";
import axios from "axios";
import "./QRcode.css"
import { InputText } from "primereact/inputtext";

import { SERVER_url } from "../../config";



const QRcode = () => {

  // useEffect (() => {

  //   let user = localStorage.getItem("token");
  //   if(!user){
  //     navigate('/')
  //   }
  // }, [])

  const navigate = useNavigate();

  const [qrCode, setQRCode] = useState("");
  const [secret, setSecret] = useState("");
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchQRCode = async () => {
      const email = localStorage.getItem("userEmail"); // Fetch email from localStorage
    
      if (!email) {
        console.error("User email not found in local storage.");
        setErrorMessage("User email not found. Please log in.");
        navigate('/login'); // Redirect to login if email is not found
        return;
      }
    
      try {
        const response = await axios.get(`http://localhost:3030/twofactorsetup?email=${encodeURIComponent(email)}`);
        console.log(response.data);
    
        const { qrCode, secretBase32 } = response.data;
        setQRCode(qrCode); // Set the QR code image data
        setSecret(secretBase32); // Set the secret base32 code
      } catch (error) {
        console.error("Error fetching QR code:", error);
        setErrorMessage("Internal Server Error");
      }
    };
    
    fetchQRCode();
  }, []);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_url}/verify`, {
        userToken: token,
      });
      if (response.data.success) {
        navigate("/");
        // If OTP is valid, redirect to home page
        console.log("OTP is valid");
      } else {
        // If OTP is invalid, display error message
        setErrorMessage("Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setErrorMessage("Internal Server Error");
    }
  };

  return (
    <div className="twofactor">
      <h1 className="twofactor-heading1">Two-factor Authentication</h1>
      <h1 className="twofactor-heading2">
        Use Authenticator App To Scan The QR Code
      </h1>
      {errorMessage && <p className="error-twofactor">{errorMessage}</p>}
      <img src={`data:image/png;base64, ${qrCode}`} alt="QR Code" />
      <h1 className="secret-code">
        <span className="manually-heading">Or Add Manually:-</span> {secret}
      </h1>
      <form className="twofactor-form" onSubmit={handleSubmit}>
        <div className="twofactor-form-inputs">
          <InputText
            name="Token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter Token"
            required
          />
          <button type="submit">Verify</button>
        </div>
      </form>
    </div>
  );
};

export default QRcode;