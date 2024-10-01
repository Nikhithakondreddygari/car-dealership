import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './LoginwithOTP.css'
import axios from "axios";

const LoginwithOTP = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState();
  const navigate = useNavigate();

//   axios.defaults.withCredentials = true;
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3030/forget", { email })
//       .then((result) => {
//         if (result.data === "Success") {
//           setMessage("Reset Link Sent SuccessFully");
//           alert("link sent successfully");
//           navigate("/");
//         } else {
//           setMessage("Invalid Email");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         setMessage(" error sending mail");
//       });
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3030/send-otp", {email});
    if (response.status ===200){
        setMessage("Reset link send successfully ");
        alert ("OTP send Successfully");
        navigate("/verify-otp", {state : {email}});
    }
    }catch(error){
        console.error("Error sending OTP:", error);
        setMessage('Error sending OTP');
    }
};

  return (
    <div className="forgetcontainer">
      <div className="form1-container">
        <div className="formcont1">
          <h2 className="text-center text-2xl font-bold text-black mb-6">
            Login with OTP
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Enter Your email-ID</label>
             <div className="inpt">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <div className="bcklnk">
          <NavLink to="/" className="back-link">
            Back
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginwithOTP;
