import React from "react";
import { MdDiscount } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { VscWorkspaceTrusted } from "react-icons/vsc";




const skillsData =[
    {
        name:"Best price",
        icon:(
            <MdDiscount className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link:"#",
        description:"Price, quality and experience too good to be used.",
        aosDelay:"0"
    },
    {
        name:"Safety",
        icon:(
            <AiOutlineSafety className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link:"#",
        description:"Price, quality and experience too good to be used.",
        aosDelay:"500"
    },
    {
        name:"Trust",
        icon:(
            <VscWorkspaceTrusted className="text-5xl text-primary group-hover:text-black duration-300" />
        ),
        link:"#",
        description:"Price, quality and experience too good to be used.",
        aosDelay:"1000"
    }
]


function Services() {
  return (
    <div className="py-14 sm:min-h[600px] sm:grid sm:place-items-center">
        <div className="pb-12">
          <h1 
          data-aos="fade-up" 
          className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why choose us
          </h1>
        </div>
        <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                skillsData.map((skill) => (
                    <div key={skill.name}
                    data-aos="fade-up"
                    data-aos-delay={skill.aosDelay}
                    className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
                    >
                        <div className="grid place-items-center">{skill.icon} </div> 
                        <h1>{skill.name}</h1>
                        <p>{skill.description}</p>
                        <a href={skill.link}>Learn more</a>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default Services;
