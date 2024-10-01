import React from 'react'
import { FaLocationArrow } from "react-icons/fa";import { IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";



const FooterLinks = [
    {
       title: "Home",
       link: "/#" 
    },
    {
        title: "About",
        link: "/#about" 
     },
     {
        title: "Contact",
        link: "/#contact" 
     },
     {
        title: "Blog",
        link: "/#blog" 
     }
]

function Footer() {
  return (
    <div className='mt-14 rounded-t-3xl'>
        <div className='items-center'>
            <div 
            data-aos="fade-up"
            className='grid md:grid-cols-3 py-5'> 
                <div className='py-8 px-4'>
                    <h1 className='text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center'>Car Dealership</h1>
                    <p>We provide the best cars</p>
                    <br />
                    <div className='flex items-center gap-3'>
                    <FaLocationArrow/>
                    <p>
                     Bangalore, Karnataka
                    </p>
                    </div>
                    <div className='flex items-center gap-3'>
                    <IoCallSharp />
                        <p>+91 9888800000</p>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#">
                    <FaInstagram className='text-3xl hover:text-primary duration-300' />
                    </a>
                    <a href="#">
                    <FaFacebook  className='text-3xl hover:text-primary duration-300' />
                    </a>
                    <a href="#">
                    <FaWhatsapp  className='text-3xl hover:text-primary duration-300' />
                    </a>
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                     <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((data) =>{
                                        return(
                                                <li 
                                                key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'>
                                                    <span>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            );
                                    })
                                }
                            </ul>
                        </div>
                     </div>

                     <div>
                        <div className='py-8 px-4 gap-3'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((data) =>{
                                        return(
                                                <li 
                                                key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'>
                                                    <span>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            );
                                    })
                                }
                            </ul>
                        </div>
                     </div>

                     <div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((data) =>{
                                        return(
                                                <li 
                                                key={data.title}
                                                className='cursor-pointer hover:text-primary duration-300'>
                                                    <span>&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            );
                                    })
                                }
                            </ul>
                        </div>
                     </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Footer