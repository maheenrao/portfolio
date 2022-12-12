import React from "react";
// import Card from "./ProjectCard"
import img from "./images/p.jpeg";
const Projects = (props) => {
  return (
    <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20" >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-lg bg-white">
              <img src={img} alt="image" className="w-full" />

              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                  >
                    {props.title}
                  </a>
                </h3>
                <p className="mb-7 text-base leading-relaxed text-body-color">
                  {props.description}
                </p>

                <a
                  href="javascript:void(0)"
                  className="bg-purple-300 text-xl font-bold  p-3 px-6 pt-2 text-black  bg-brightRed rounded-full baseline hover:bg-purple-300 md:block"
                >
                  View Details
                </a>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default Projects;
