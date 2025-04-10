import React from "react";
import Logo from "../assets/images/layoutPageImages/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center p-4">
        <Link to={"/portfolio"}>
          <img src={Logo} alt="Logo" className="w-20 h-10 md:w-44 md:h-20" />
        </Link>
        <div className="mx-auto">
          <p className="font-bold text-lg sm:text-2xl md:text-6xl text-[#2C313F] capitalize ">
            digital marketing and lead generation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
