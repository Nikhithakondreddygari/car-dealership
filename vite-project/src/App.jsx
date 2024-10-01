import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Homepage from "./Components/Homepage/Homepage";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Addcar from "./Components/Addcar/Addcar";
import Soldcar from "./Components/Soldcar/Soldcar";
import Incentives from "./Components/Incentives/Incentives";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About/About";
import Forgottenpassword from "./Components/Forgottenpassword/Forgottenpassword";
import Resetpassword from "./Components/Resetpassword/Resetpassword";
import QRcode from "./Components/QRcode/QRcode";
import LoginwithOTP from "./Components/LoginwithOTP/LoginwithOTP";
import VerifyOTP from "./Components/VerifyOTP/VerifyOTP";
import Loginverify from "./Components/Loginverify/Loginverify";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }

  // AOS initialization
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

const [soldCars, setSoldCars] = useState([]);

const addSoldCar = (carData) => {
  setSoldCars([...soldCars, carData])
}


  return (
    <div className="grid-container">
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      {/* <Homepage /> */}
      {/* <Navbar/> */}
      {/* <Header/> */}
      {/* <Homepage/> */}
      {/* <Sidebar/> */}
      {/* <BrowserRouter>
   <Routes>
    <Route path='/' element={<Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>}></Route>
    <Route path='/' element={<Header OpenSidebar={OpenSidebar}/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
   </Routes>
   
   </BrowserRouter> */}

      {/* <Router>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Header OpenSidebar={OpenSidebar} />\
        <Homepage/>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router> */}

      <BrowserRouter>
        
          <Routes>
            {/* <Route path="/" element={<About />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/soldcar" element={<Soldcar  soldCars={soldCars}/>} />
            <Route path="/addcar" element={<Addcar onAddSoldCar={addSoldCar}/>} />
            <Route path="/incentives" element={<Incentives />} />
            <Route path="/forgottenpassword" element={<Forgottenpassword />} />
            <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
            <Route path="/qrcode" element={<QRcode />} />
            <Route path="/loginwithotp" element={<LoginwithOTP />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/loginverify" element={<Loginverify />} />
          </Routes>
        
      </BrowserRouter>
    </div>
  );
};
                    
export default App;
