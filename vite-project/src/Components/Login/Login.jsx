// import React, { useState } from 'react';
// import './Login.css';
// import { FaUserAlt, FaLock } from "react-icons/fa";
// import Background from '.././././.././assets/car.avif'
// import validation from '../Validation/Validation';
// import { NavLink } from 'react-router-dom';
// // import Signup from '../Signup/Signup';
// import axios from 'axios';

// function Login() {

//     const [values, setValues] = useState({
//         username: "",
//         password: ""
//     })

//     const [errors,setError] = useState({})

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setValues(prevState => ({
//             ...prevState,
//             [name]: value
//         }));

//     }

//     // function handleSubmit(e){
//     //     e.preventDefault();
//     //     setError(validation(values));
//     // }

//     function handleSubmit(e){
//         e.preventDefault();
//         const validationErrors = validation(values);
//         setError(validationErrors);
//         // If there are no validation errors, proceed with the login
//         if (Object.keys(validationErrors).length === 0) {
//             axios.post('http://localhost:3000/api/v1/users/login', values)
//             .then(response => {
//                 console.log('login successful:', response.data);
//             }).catch(error =>{
//                 console.error('login failed:', error);
//             });
//         }
//     }

//     return (
//       <div className='containerStyle '>
//         <div className='login '>
//             <form onSubmit={handleSubmit}>
//                 <h1>Login</h1>
//                 <div className='input-box'>
//                     <input type='text' name='username' placeholder='   User name' value={values.username} required onChange={handleChange}/>
//                     <FaUserAlt className='icon' />
//                     {errors.username && <p style={{color:"red", fontSize:"13px"}}>{errors.username}</p>}
//                 </div>
//                 <div className='input-box'>
//                     <input type='password'name='password' placeholder=' Password' value={values.password} required onChange={handleChange}/>
//                     <FaLock className='icon'/>
//                     {errors.password && <p style={{color:"red", fontSize:"13px"}}>{errors.password}</p>}
//                 </div>
//                 <div className='remember-forgot'>
//                     <label><input type='checkbox'/>Remember Me</label>
//                     <a href='/forgottenpassword'>Forgot Password</a>
//                 </div>

//                 <NavLink to="/"><button type='submit'>Login</button></NavLink>
//                 {/* <button type='submit'>Login</button> */}
//                 <br/>
//                 <br/>
//                 <NavLink to="/signup"><button>Register</button></NavLink>

//             </form>

//         </div>

//       </div>
//     )
//   };

//   export default Login;

// import React, { useState } from "react";
// import "./Login.css";
// import { FaUserAlt, FaLock } from "react-icons/fa";
// import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
// import validation from "../Validation/Validation";
// import axios from "axios";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";

// function Login() {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setError] = useState({});
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const [showPassword, setShowPassword] = useState(false);
//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setValues((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   }

//   const loginwithgoogle = () => {
//     window.open("http://localhost:3030/auth/google", "_self");
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     const validationErrors = validation(values);
//     setError(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       axios
//         .post("http://localhost:3030/login", values)
//         .then((response) => {
//           console.log("login successful:", response.data);
//           // Redirect to homepage after successful login
//           // navigate("/home"); // Use navigate function to redirect
//           if (response.data === "Success") {
//             setMessage("Welcome");
//             navigate("/loginverify");
//           } else {
//             alert("Incorrect Password or user");
//             setMessage(response.data);
//           }
//         })
//         .catch((error) => {
//           console.error("login failed:", error);
//         });
//     }
//   }

//   return (
//     <div className="containerStyle ">
//       <div className="login ">
//         <form onSubmit={handleSubmit}>
//           <h1>Login</h1>
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
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={values.password}
//               required
//               onChange={handleChange}
//             />
//             {/* <FaLock className='icon' /> */}
//             <button
//               type="button"
//               className="passwordbtn"
//               onClick={togglePassword}
//             >
//               {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
//             </button>
//             {errors.password && (
//               <p style={{ color: "red", fontSize: "13px" }}>
//                 {errors.password}
//               </p>
//             )}
//           </div>
//           <div className="remember-forgot">
//             <label>
//               <input type="checkbox" />
//               Remember Me
//             </label>
//             <a href="/forgottenpassword">Forgot Password</a>
//           </div>
//           <div className="loginbtn">
//             <button type="submit">Login</button>
//           </div>
//           <br />
//           <br />
//           <div className="signbtn">
//             <NavLink to="/signup">
//               <button>Register</button>
//             </NavLink>
//           </div>
//           <div className="googlebtn">
//             <button className="login-with-google-btn" onClick={loginwithgoogle}>
//               Sign In With Google
//             </button>
//           </div>
//           <div>
//             {/* <button onclick={handleLoginWithOTP}>Login with OTP</button> */}
//             <NavLink to="/loginwithotp" className="signup1-link">
//               Login using OTP
//             </NavLink>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import validation from "../Validation/Validation";
import axios from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [errors, setError] = useState({});

  const loginwithgoogle = () => {
    window.open("http://localhost:3030/auth/google", "_self");
  };

  axios.defaults.withCredentials = true;

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setMessage("Welcome");
          navigate("/loginverify");
        } else {
          alert("Incorrect Password or user");
          setMessage(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="containerStyle ">
      <div className="login ">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUserAlt className="icon" />
            {errors.username && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.username}
              </p>
            )}
          </div>
          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FaLock className='icon' /> */}
            <button
              type="button"
              className="passwordbtn"
              onClick={togglePassword}
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
            {errors.password && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.password}
              </p>
            )}
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="/forgottenpassword">Forgot Password</a>
          </div>
          <div className="loginbtn">
            <button type="submit">Login</button>
          </div>
          <br />
          <br />
          <div className="signbtn">
            <NavLink to="/signup">
              <button>Register</button>
            </NavLink>
          </div>
          <div className="googlebtn">
            <button className="login-with-google-btn" onClick={loginwithgoogle}>
              Sign In With Google
            </button>
          </div>
          <div>
            {/* <button onclick={handleLoginWithOTP}>Login with OTP</button> */}
            <NavLink to="/loginwithotp" className="signup1-link">
              Login using OTP
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
