// // import React from 'react';
// import React, { useState } from "react";
// import "./Signup.css";
// import { FaUserAlt, FaLock } from "react-icons/fa";
// import validation from "../Validation/Validation";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// const navigate = useNavigate;
// import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

// function Signup() {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setError] = useState({});
//   const [showPassword, setShowPassword] = useState(false);


//   function handleChange(e) {
//     const { name, value } = e.target;
//     setValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }

//   // Function to toggle password visibility
//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   function handleConfirmPasswordBlur(e) {
//     const { name, value } = e.target;
//     setError(validation({ ...values, [name]: value }));
//   }
//   axios.defaults.withCredentials = true;
//   //   function handleSubmit(e){
//   //     e.preventDefault();

//   //   axios.post('http://localhost:3000/api/v1/users/signup', values)
//   //     .then(response => {
//   //         console.log('signup successfull:', response.data);
//   //         navigate("/");
//   //     }).catch(error =>{
//   //         console.error('signup failed:', error);
//   //     });
//   // }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password, confirmPassword } = values
//     axios
//       .post("http://localhost:3030/signup", { email: username, password, confirmPassword })
//       .then((response) => {
//         console.log(response);
//         if (response.status === 200) {
//           setMessage("Welcome! Registration successful.");
//           console.log("Navigating to QRcode component...");
//           navigate("/qrcode");
//         } else {
//           alert("Registration failed. Please try again.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error during registration:", error);
//         alert("Registration failed. Please try again.");
//       });
//   };

//   return (
//     <div className="bgimg-signup">
//       <div className="signup">
//         <form onSubmit={handleSubmit}>
//           <h1>Register</h1>
//           <div className="input-box">
//             <input
//               type="email"
//               name="username"
//               placeholder="Email ID"
//               value={values.username}
//               required
//               onChange={handleChange}
//             />
//             <FaUserAlt className="icon" />
//             {errors.username && (
//               <p style={{ color: "red", fontSize: "13px" }}>
//                 {errors.username}
//               </p>
//             )}
//           </div>
//           <div className="input-box">
//             <div className="password-input-container">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={values.password}
//               required
//               onChange={handleChange}
//             />
//             {/* <FaLock className="icon" /> */}
//             <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={togglePassword}
//               >
//                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
//               </button>
//             {errors.password && (
//               <p style={{ color: "red", fontSize: "13px" }}>
//                 {errors.password}
//               </p>
//             )}
//           </div>
//           </div>
//           <div className="input-box">
//             <input
//             //   type="password"
//             type={showPassword ? "text" : "password"}
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={values.confirmPassword}
//               required
//               onChange={handleChange}
//               onBlur={handleConfirmPasswordBlur}
//             />
//             {/* <FaLock className="icon" /> */}
//             <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={togglePassword}
//               >
//                 {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
//               </button>
//             {errors.confirmPassword && (
//               <p style={{ color: "red", fontSize: "13px" }}>
//                 {errors.confirmPassword}
//               </p>
//             )}
//           </div>

//           {/* <NavLink to="/login"><button>Register</button></NavLink> */}
//           <div className="registerbtn">
//           <button  type="submit">Register</button>
//           </div>
//           <div className="login-back">
//             <a href="/">Login</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

















// import React from 'react';
import React, { useState } from "react";
import "./Signup.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import validation from "../Validation/Validation";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const navigate = useNavigate;
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';


const initialState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const { name, email, password } = formData;
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState('');

  // Function to handle password strength
            const handlePassword = (passwordValue) => {
                const StrengthChecks = {
                    length: passwordValue.length >= 8 ? true : false,
                    hasUpperCase: /[A-Z]+/.test(passwordValue),
                    hasLowerCase: /[a-z]+/.test(passwordValue),
                    hasDigit: /[0-9]+/.test(passwordValue),
                    hasSpecialChar: /[^A-Za-z0-9]+/.test(passwordValue),
                };
        
                let verifiedList = Object.values(StrengthChecks).filter((value) => value);
        
                let strength =
                    verifiedList.length === 5
                        ? "Strong"
                        : verifiedList.length > 2
                            ? "Medium"
                            : "Weak";
        
                setShowPassword(passwordValue);
                setProgress(`${(verifiedList.length / 5) * 100}%`);
                setMessage(strength);
                console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
            };

  // Function to toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // function handleConfirmPasswordBlur(e) {
  //   const { name, value } = e.target;
  //   setError(validation({ ...values, [name]: value }));
  // }
  // axios.defaults.withCredentials = true;
  //   function handleSubmit(e){
  //     e.preventDefault();

  //   axios.post('http://localhost:3000/api/v1/users/signup', values)
  //     .then(response => {
  //         console.log('signup successfull:', response.data);
  //         navigate("/");
  //     }).catch(error =>{
  //         console.error('signup failed:', error);
  //     });
  // }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3030/signup", { username: name, email, password })
      .then((response) => {
        // console.log(response);
        if (response.status === 201) {
          setMessage("Welcome! Registration successful.");
          console.log("Navigating to QRcode component...");
          navigate('/qrcode');
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error('Signup error:', error);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <div className="bgimg-signup">
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="name"
              value={name}
              required
              onChange={handleChange}
            />
            <FaUserAlt className="icon" />
            {errors.username && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.username}
              </p>
            )}
          </div>
          <div className="input-box">
            <div className="password-input-container">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              required
              onChange={handleChange}
            />
                        <FaUserAlt className="icon" />
            {/* <FaLock className="icon" /> */}
            {/* <button
                type="button"
                className="password-toggle"
                onClick={togglePassword}
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </button> */}
            {errors.password && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.password}
              </p>
            )}
          </div>
          </div>
          <div className="input-box">
            <input
            //   type="password"
            type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              required
              // onChange={handleChange}
              // onBlur={handleConfirmPasswordBlur}
              onChange={(e) => {
                handleChange(e);
                handlePassword(e.target.value);
              }}
            />
            {/* <FaLock className="icon" /> */}
            <button
                type="button"
                className="password-toggle"
                onClick={togglePassword}
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </button>
            {/* {errors.confirmPassword && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.confirmPassword}
              </p>
            )} */}
          </div>

          {/* <NavLink to="/login"><button>Register</button></NavLink> */}
          <div className="registerbtn">
          <button  type="submit">Register</button>
          </div>
          <div className="login-back">
            <a href="/">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

