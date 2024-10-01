import React from "react";
import mainimg from "../../assets/main.jpg";
import About from "../About/About";
import Services from "../Services/Services";
import Carlist from "../Carlist/Carlist";
import Appstorebanner from "../Appstorebanner/Appstorebanner";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";




function Homepage() {
  return (
    <Sidebar>
    <>
    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="order-1 sm:order-2"
      >
        <img src={mainimg} alt="" />
      </div>
      <div className="order-2 sm:order-1 space-y-5 sm:pr-45">
        <p 
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-primary text-2xl font-serif">
          Get behind the wheel of excitement
        </p>
        <h1 
        data-aos="fade-up"
        data-aos-delay="700"
        className="text-5xl lg:text-7xl font-semibold font-serif">
          Car Dealership
        </h1>
        <p
        data-aos="fade-up"
        data-aos-delay="1000"
        >All types of Used cars are availabel here. </p>
        <button 
        data-aos="fade-up"
        data-aos-delay="1500"
        className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">
          Get Started
        </button>
      </div>
    </div>
    <About/>
    <Services/>
    <Carlist/>
    <Appstorebanner/>
    <Footer/>
    </>
    </Sidebar>
  );
}

export default Homepage;
