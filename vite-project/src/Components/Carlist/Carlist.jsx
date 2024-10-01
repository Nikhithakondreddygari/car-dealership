import React from "react";
import scorpiocar from "../../assets/scorpiocar.jpg";
import endeavor from "../../assets/endeavor.jpg";
import verna from "../../assets/verna.avif";

const CarListData = [
  {
    name: "Scorpio",
    price: 1000000,
    image: scorpiocar,
    aosDelay: "0",
  },
  {
    name: "Endeavor",
    price: 1250000,
    image: endeavor,
    aosDelay: "500",
  },
  {
    name: "verna",
    price: 620000,
    image: verna,
    aosDelay: "1000",
  },
];

function Carlist() {
  return (
    <div className="pb-24 ">
      <h1
        data-aos="fade-up"
        className="text-3xl sm:text-4xl text-center font-semibold font-serif mb-3"
      >
        New Arrivals
      </h1>
      <div className="items-center">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
            {CarListData.map((data) => {
              return (
                <div
                data-aos="fade-up"
                data-aos-Delay={data.aosDelay}
                className="space-y-3 w-[230px] border-2 border-gray-400 hover:border-primary p-3 rounded-xl relative group">
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-1 group-hover:translate-x-10 duration-700"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{data.name}</h1>
                    <div className="justify-between items-center text-xl font-semibold">
                      <p className="overflow-hidden">Rs.{data.price}</p>
                      <a href="#">Details</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid place-content-center mt-8">
            <button data-aos="fade-up" className="button-outline">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carlist;
