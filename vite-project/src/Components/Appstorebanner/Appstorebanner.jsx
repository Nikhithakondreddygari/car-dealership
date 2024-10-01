import React from "react";
import banner from "../../assets/banner.jpg";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";

const bannerimg = {
  backgroundImage: `url(${banner})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

function Appstorebanner() {
  return (
    <div className="bg-gray-800">
      <div
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        // style={bannerimg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              Get Started with our app
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Download the app and start using it
            </p>
            <div 
            data-aos="fade-up"
            className="flex flex-wrap justify-center items-center gap-4">
              <a href="#">
                <img
                  src={google}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={apple}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appstorebanner;
