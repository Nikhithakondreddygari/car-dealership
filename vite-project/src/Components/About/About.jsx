import React from "react";
import abtimg from "../../assets/aboutimg.jpg"

function About() {
  return (
    <div>
      <div className="container mt-10 duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div 
          data-aos="fade-up"
          data-aos-delay="500">
            <img src={abtimg} alt="" className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[]"/>
          </div>
          <div>
            <div className="space-y-5 sm:p-6 pb-6">
              <h1  data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif">
                About us
              </h1>
              <p data-aos="fade-up"> In case of safety issues, danger, product defect, or faulty 
                procedure during the manufacturing of the motor vehicle, the 
                maker can request to return either a batch or the entire 
                production run. </p>

                <p data-aos="fade-up">Product and operation tests and inspections at different 
                   stages of the value chain are made to avoid these product
                   recalls by ensuring end-user security and safety and 
                   compliance with the automotive industry requirements.</p>
                   <button data-aos="fade-up" className="button-outline">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
