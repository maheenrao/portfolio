import React from "react";
import img from "../components//images/logo.svg";
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2 p-3 px-10 ">
            <NavLink to="/">
              {" "}
              <img src={img} alt="picsture" />
            </NavLink>
          </div>
          <div className="hidden font-normal space-x-6 md:flex text-2xl ">
            <NavLink
              to="/about"
              className=" text-xl text-dark  p-3 px-6 pt-2 text-black  bg-brightRed rounded-full baseline hover:bg-purple-300 md:block "
            >
              About
            </NavLink>
            <NavLink to="/contact" className=" text-xl text-dark  p-3 px-6 pt-2 text-black  bg-brightRed rounded-full baseline hover:bg-purple-300 md:block ">
              Contact Me
            </NavLink>
            <NavLink to="/resume" className=" text-xl text-dark  p-3 px-6 pt-2 text-black  bg-brightRed rounded-full baseline hover:bg-purple-300 md:block ">
              Resume
            </NavLink>
            {/* <NavLink to="/projects" className=" text-xl text-dark  p-3 px-6 pt-2 text-black  bg-brightRed rounded-full baseline hover:bg-purple-300 md:block ">
              Projects
            </NavLink> */}
          </div>
          <div className="hidden p-3 px-6 pt-2 text-black  bg-brightRed rounded-full baseline hover:bg-purple-300 md:block">
            Get Started
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
