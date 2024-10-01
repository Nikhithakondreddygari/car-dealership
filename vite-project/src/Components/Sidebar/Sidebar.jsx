// import React from 'react';
// import {FaHome} from 'react-icons/fa'
// import { FaCar } from "react-icons/fa";
// import { FaCarAlt } from "react-icons/fa";
// import { GiReceiveMoney } from "react-icons/gi";
// import Dashboard from '../Dashboard/Dashboard';



// function Sidebar ({sidebarToggle}) {
//   return (
//     <>
//     <div className={`${sidebarToggle? "hidden":"block"}w-60 bg-black fixed h-full px-4 py-2`}>
//         <div className='my-2 mb-4'> 
//             <h1 className='text-2x text-white font-bold'>Car Dealership</h1>
//         </div>
//         <hr/>
//         <ul className='mt-3 text-white font-bold'>
//             <li className='mb-2 rounded hover:shadow hover:bg-red-800 py-2'>
//                 <a href='' className='px-3'>
//                     <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
//                     Home
//                 </a>
//             </li>

//             <li className='mb-2 rounded hover:shadow hover:bg-red-800  py-2'>
//                 <a href='' className='px-3'>
//                     <FaCarAlt   className='inline-block w-6 h-6 mr-2 -mt-2'></FaCarAlt>
//                     Sold Car
//                 </a>
//             </li>

//             <li className='mb-2 rounded hover:shadow hover:bg-red-800  py-2'>
//                 <a href='' className='px-3'>
//                     <FaCar  className='inline-block w-6 h-6 mr-2 -mt-2'></FaCar>
//                     Add Car
//                 </a>
//             </li>

//             <li className='mb-2 rounded hover:shadow hover:bg-red-800  py-2'>
//                 <a href='' className='px-3'>
//                     <GiReceiveMoney  className='inline-block w-6 h-6 mr-2 -mt-2'></GiReceiveMoney>
//                     Incentives
//                 </a>
//             </li>
//         </ul>
//         {/* <Dashboard/> */}
//     </div>
//     </>
//   )
// }

// export default Sidebar;



// import React from 'react'
// import 
// {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
//  from 'react-icons/bs'
//  import {FaHome} from 'react-icons/fa'
//  import { FaCarAlt } from "react-icons/fa";
// import { FaCar } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
// import { GiReceiveMoney } from "react-icons/gi";
// import { BsJustify } from "react-icons/bs";
// import Navbar from '../Navbar/Navbar';



// function Sidebar({openSidebarToggle, OpenSidebar}) {
//   return (
//     <>
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
//         <div className='sidebar-title'>
//             <div className='sidebar-brand'>
//             <span className='text-white font-semibold'>Car Dealership</span>
//             </div>
//             <FaBars className='text-white mt-4 ml-2 cursor-pointer' onClick={OpenSidebar}/>        </div>

//         <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href='' className='px-3'>
//                     <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>Home
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//             <a href='' className='px-3'>
//                      <FaCarAlt   className='inline-block w-6 h-6 mr-2 -mt-2'></FaCarAlt>
//                      Sold Car
//                  </a>
//             </li>
//             <li className='sidebar-list-item'>
                
//             <a href='' className='px-3'>
//                      <FaCar  className='inline-block w-6 h-6 mr-2 -mt-2'></FaCar>
//                      Add Car
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//             <a href='' className='px-3'>
//                      <GiReceiveMoney  className='inline-block w-6 h-6 mr-2 -mt-2'></GiReceiveMoney>
//                      Incentives
//                 </a>
//             </li>
           
            
//         </ul>
//     </aside>
    
//     </>
//   )
// }

// export default Sidebar















// new sidebar
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import { FaCarAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";




const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        {
            path:"/home",
            name:"Homepage",
            icon:<FaHome/>
        },
        {
            path:"/soldcar",
            name:"Arrived cars",
            icon:<FaCarAlt/>
        },
        {
            path:"/addcar",
            name:"Addcar",
            icon:<FaCar/>
        },
        {
            path:"/incentives",
            name:"Incentives",
            icon:<GiReceiveMoney/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<FaUser />
        }
        // {
        //     path:"/search",
        //     name:"Search",
        //     icon:<CiSearch />

        // }
        
        // {
        //     path:"/product",
        //     name:"Product",
        //     icon:<FaShoppingBag/>
        // },
        // {
        //     path:"/productList",
        //     name:"Product List",
        //     icon:<FaThList/>
        // }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;