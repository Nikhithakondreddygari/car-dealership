// import React, { useState } from 'react';
// import './Resetpassword.css'
// import { FaUserAlt} from "react-icons/fa";
// import { NavLink, useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// function Resetpassword() {

//   const [values, setValues] = useState({
//     password: ""

// })

// const navigate = useNavigate
// const {id,token} = useParams()

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
//   axios.post(`http://localhost:3000/api/v1/users/reset-password/${id}/${token}`, {password})
//   .then(res => {
//     if(res.data.Status === "Success"){
//       navigate('/')
//     }
//   }).catch(err => console.log(err))
// }

//   return (
//     <div className='containerStyle2'>
//       <div className="resetpswd">
//       <form onSubmit={handleSubmit}>
//                 <h1>Reset Password</h1>
//                 <div className='input-box'>
//                     <input type='password' name='password' placeholder='   New Password' value={values.username} required onChange={handleChange}/>
//                     <FaUserAlt className='icon' />
//                     {errors.username && <p style={{color:"red", fontSize:"13px"}}>{errors.username}</p>}
//                 </div>

//                 <button type='submit'>Submit</button>

//             </form>
//       </div>
//     </div>
//   );
// }

// export default Resetpassword;

import React, { useState } from "react";
import "./Resetpassword.css";
import { FaUserAlt } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { useParams } from "react-router-dom";


const initialState = {
  name: "",
  email: "",
  password: "",
};

function Resetpassword() {
      const [errors,setError] = useState({})

  const navigate = useNavigate();
  const { id, token } = useParams();

  const [formData, setFormdata] = useState(initialState);
  const { password } = formData;

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");

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
    console.log(`"verifiedList: ", ${(verifiedList.length / 5) * 100}%`);
  };

  const getActiveColor = (type) => {
    if (type === "Strong") return "brown";
    if (type === "Medium") return "#FE804D";
    return "orange";
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    axios.defaults.withCredentials = true;
    e.preventDefault();
    // axios.post('http://localhost:3030/register', { name, email, password })
    axios
      .post(`http://localhost:3030/resetpassword/${id}/${token}`, { password })
      .then((result) => {
        if (result.status === 200) {
          // if(result.data === 'Success')
          alert("Successfully Updated");
          navigate("/");
          // setMessage(" updated Succesfully..")
        } else {
          // console.log(result);
          alert("error while updating");
          // navigate('/');
          // setMessage("error updaing password")
        }
      })
      // .catch(err => console.log(err));
      .catch((err) => {
        console.log(err);
        // setMessage(" error updating password..")
      });
  };

  return (
    <div className="containerStyle2">
      <div className="resetpswd">
        <form onSubmit={handleSubmit}>
          <h1>Reset Password</h1>
          <div className="input-box">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="   New Password"
              value={password}
              required
              onChange={({ target }) => {
                handleChange({ target }); // Call handleChange to update the form data
                handlePassword(target.value);
            }}
            className="w-full p-2 border-0 rounded-md"
        />            
            <FaUserAlt className="icon" />
            {errors.username && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.username}
              </p>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
