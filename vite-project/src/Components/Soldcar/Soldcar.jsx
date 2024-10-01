// current form



// import React, { useEffect, useState } from "react";
// import Addcar from "../Addcar/Addcar";
// import Sidebar from "../Sidebar/Sidebar";
// import axios from "axios";

// function Soldcar() {
//   const [carList, setCarList] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state


//   useEffect(() => {
//     axios
//       .get("http://localhost:5173/soldcar")
//       .then((response) => {
//         // Ensure response.data is an array
//         if (Array.isArray(response.data)) {
//           setCarList(response.data);
//         } else {
//           console.error("Invalid data format received:", response.data);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("error fetching car data:", err);
//         setLoading(false);
//       });
//   }, []);


//   function handleDetailsClick(id) {
//     // Logic to handle click event
//     console.log("Clicked car ID:", id);
//   }

//   return (
//     <Sidebar>
//       <div className="pb-24 ">
//         <h1
//           data-aos="fade-up"
//           className="text-3xl sm:text-4xl text-center font-semibold font-serif mb-3"
//         >
//           Added cars details
//         </h1>
//         {loading ? (
//           <p>Loading...</p> // Display loading message while fetching data
//         ) : (
//         <div className="items-center">
//           <div><acronym title=""></acronym>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
//               {carList.map((car, index) => (
//                 <div
//                   key={index}
//                   data-aos="fade-up"
//                   data-aos-Delay={car.aosDelay}
//                   className="space-y-3 w-[230px] border-2 border-gray-400 hover:border-primary p-3 rounded-xl relative group"
//                 >
//                   <div className="w-full h-[120px]">
//                     <img
//                       className="w-full h-[120px] object-contain sm:translate-x-1 group-hover:translate-x-10 duration-700"
//                       src={car.selectedFiles}
//                       alt=""
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <h1 className="text-primary font-semibold">
//                       {car.brandName}
//                     </h1>
//                     <div className="justify-between items-center text-xl font-semibold">
//                       <p className="overflow-hidden">Rs.{car.price}</p>
//                       <a href={`#/details/${car.id}`}>Details</a>
//                     </div>r5
//                   </div>
//                   <div className="grid place-content-center mt-8">
//                     <button data-aos="fade-up" className="button-outline" onClick={() =>handleDetailsClick(car.id)}>
//                       Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         )}
//       </div>
//     </Sidebar>
//   );
// }

// export default Soldcar;










import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

const SoldCar = () => {
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/soldcar")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCarList(response.data);
        } else {
          console.error("Invalid data format received:", response.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching car data:", err);
        setLoading(false);
      });
  }, []);

  const handleDetailsClick = (car) => {
    // Logic to handle click event
    console.log("Clicked car:", car);
  };

  return (
    <Sidebar>
      <div className="pb-24">
        <h1 className="text-3xl sm:text-4xl text-center font-semibold font-serif mb-3">
          Added Cars Details
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
              {carList.map((car, index) => (
                <div
                  key={index}
                  className="space-y-3 w-[230px] border-2 border-gray-400 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-1 group-hover:translate-x-10 duration-700"
                      src={car.photoUrls[0]}
                      alt={car.BrandName}
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">
                      {car.BrandName}
                    </h1>
                    <div className="justify-between items-center text-xl font-semibold">
                      <p>Rs. {car.Price}</p>
                    </div>
                  </div>
                  <div className="grid place-content-center mt-8">
                    <button
                      className="button-outline"
                      onClick={() => handleDetailsClick(car)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Sidebar>
  );
};

export default SoldCar;















// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Assuming you're using axios for HTTP requests
// import Sidebar from "../Sidebar/Sidebar";

// const SoldCar = () => {
//   const [carList, setCarList] = useState([]);

//   useEffect(() => {
//     // Fetch car data from MongoDB
//     const fetchCarData = async () => {
//       try {
//         const response = await axios.get("/api/cars"); // Adjust the API endpoint according to your backend
//         if (Array.isArray(response.data)) {
//           setCarList(response.data); // Assuming response.data is an array of car objects
//         } else {
//           console.error("Invalid car data received:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching car data:", error);
//       }
//     };

//     fetchCarData();
//   }, []);

//   const showCarDetails = (car) => {
//     // Function to show more details of the car
//     console.log("Show details of:", car);
//     // Implement logic to show more details, e.g., modal or expanded view
//   };

//   return (
//     <Sidebar>
//     <div className="pb-24">
//       <h1
//         data-aos="fade-up"
//         className="text-3xl sm:text-4xl text-center font-semibold font-serif mb-3"
//       >
//         New Arrivals
//       </h1>
//       <div className="items-center">
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
//             {carList.map((car, index) => (
//               <div
//                 key={index}
//                 data-aos="fade-up"
//                 data-aos-Delay={car.aosDelay} // Assuming you have aosDelay property in your car object
//                 className="space-y-3 w-[230px] border-2 border-gray-400 hover:border-primary p-3 rounded-xl relative group"
//               >
//                 <div className="w-full h-[120px]">
//                   <img
//                     className="w-full h-[120px] object-contain sm:translate-x-1 group-hover:translate-x-10 duration-700"
//                     src={car.image} // Assuming you have image property in your car object
//                     alt=""
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <h1 className="text-primary font-semibold">{car.brandName}</h1>
//                   <div className="justify-between items-center text-xl font-semibold">
//                     <p className="overflow-hidden">Rs.{car.price}</p>
//                     <button onClick={() => showCarDetails(car)}>Details</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="grid place-content-center mt-8">
//             <button data-aos="fade-up" className="button-outline">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </Sidebar>
//   );
// };

// export default SoldCar;
