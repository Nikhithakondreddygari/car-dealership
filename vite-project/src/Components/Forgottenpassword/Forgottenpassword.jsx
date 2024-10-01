// import React, { useState } from 'react';
// import './Forgottenpassword.css';
// import { FaUserAlt} from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';

// function Forgottenpassword() {

//   const [values, setValues] = useState({
//     username: ""

// })

//     const [errors,setError] = useState({})

// function handleChange(e) {
//           const { name, value } = e.target;
//           setValues(prevState => ({
//               ...prevState,
//               [name]: value
//           }));

//       }

// //   function handleSubmit(e){
// //     e.preventDefault();
// //     const validationErrors = validation(values);
// //     setError(validationErrors);

// //     if (Object.keys(validationErrors).length === 0) {
// //         axios.post('http://localhost:3000/api/v1/users/login', values)
// //             .then(response => {
// //                 console.log('login successful:', response.data);
// //                 // Redirect to login page after successful submission
// //                 window.location.href = "/login"; // or use NavLink instead
// //             }).catch(error => {
// //                 console.error('login failed:', error);
// //             });
// //     }
// // }

// axios.defaults.withCredentials = true;
// const handleSubmit = (e) => {
//   e.preventDefault()
//   axios.post('http://localhost:3030/forget', {email})
//   .then(res => {
//     if(res.data.Status === "Success"){
//       navigate('/')
//     }
//   }).catch(err => console.log(err))
// }

//   return (
//     <div className='containerStyle1'>
//       <div className="forgottenpswd ">
//       <form onSubmit={handleSubmit}>
//                 <h1>Forgot Password</h1>
//                 <div className='input-box'>
//                     <input type='email' name='username' placeholder='   Email ID' value={values.username} required onChange={handleChange}/>
//                     <FaUserAlt className='icon' />
//                     {errors.username && <p style={{color:"red", fontSize:"13px"}}>{errors.username}</p>}
//                 </div>

//                 <button type='submit'>Submit</button>
//                 <br/>
//                 <br/>
//                 <div className='login-back'>
//                 <a href='/'>Login</a>
//                 </div>

//             </form>
//       </div>
//     </div>
//   );
// }

// export default Forgottenpassword;

import React, { useState } from "react";
import "./Forgottenpassword.css";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function Forgottenpassword() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const [errors, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  //   function handleSubmit(e){
  //     e.preventDefault();
  //     const validationErrors = validation(values);
  //     setError(validationErrors);

  //     if (Object.keys(validationErrors).length === 0) {
  //         axios.post('http://localhost:3000/api/v1/users/login', values)
  //             .then(response => {
  //                 console.log('login successful:', response.data);
  //                 // Redirect to login page after successful submission
  //                 window.location.href = "/login"; // or use NavLink instead
  //             }).catch(error => {
  //                 console.error('login failed:', error);
  //             });
  //     }
  // }

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/forget", { email })
      .then((result) => {
        //   console.log(result)
        if (result.data === "Success") {
          // setMessage(true)
          setMessage("Reset Link Sent SuccessFully");
          alert("link sent successfully");
          
          const { id, token } = result.data;
          navigate(`/resetpassword/${id}/${token}`);
        //   alert("Link sent to your email ID")
        } else {
          // alert("Incorrect Password or user")
          setMessage("Invalid Email");
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(" error sending mail");
      });
  };

  return (
    <div className="containerStyle1">
      <div className="forgottenpswd ">
        <form onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="   Email ID"
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

          <button type="submit">Submit</button>
          <br />
          <br />
          <div className="login-back">
            <a href="/">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgottenpassword;
