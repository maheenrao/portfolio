import React from 'react'
import img from "./images/resume.jpg";
const Resume = () => {
  return (
    <div className=" container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
      <div className=" flex flex-col mb-32 space-y-12 md:w-1/2 ">
        <h1 className=" bg-purple-300 mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px] ">
          Resume
        </h1>
      </div>
      <div className=" ">
        {" "}
        <img src={img} alt="picsture" />
      </div>
    </div>
  );
}

export default Resume