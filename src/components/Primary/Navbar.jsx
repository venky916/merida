import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="p-8 flex items-center justify-between">
      <div>
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-32 h-14 cursor-pointer"
        />
      </div>
      <div className=" hidden lg:flex items-center gap-8">
        <button className="text-white cursor-pointer">Why SLA?</button>
        <button className="text-white cursor-pointer">
          Corporate Training
        </button>
        <button className="text-white cursor-pointer">Blogs </button>
        <button className="text-white cursor-pointer">Events</button>
        <button className="text-white flex gap-2 items-center cursor-pointer">
          Programs <FaChevronDown />
        </button>
        <button className="text-white flex gap-2 items-center cursor-pointer">
          Courses <FaChevronDown />
        </button>
      </div>
      <div className="">
        <div className="">
          <button className="hidden md:flex p-2 bg-violet-500 rounded-md text-white cursor-pointer">
            Contact Us
          </button>
        </div>
        <div className="block md:hidden bg-gray-100 rounded-md cursor-pointer">
          <IoMenu className="w-12 h-12 text-black " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
