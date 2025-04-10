import React from "react";
import { IoSearch } from "react-icons/io5";

import { IoIosCheckmark } from "react-icons/io";

const Hero = () => {
  const policies = [
    "Multiple case studies",
    "Multiple industry projects",
    "Multiple certifications to build your profile",
  ];

  const list = [
    "Work Integration",
    "Project-Based Learning",
    "Networking Opportunities",
  ];

  return (
    <div className="pt-3 px-12 bg-black">
      <div className="h-full border-4 border-violet-500 mx-auto rounded-lg relative p-2">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full flex flex-col justify-start gap-4 p-2">
            <p className="tex-5xl md:text-6xl lg:text-8xl font-bold ">
              PEOPLE WHO CARE ABOUT YOUR{" "}
              <span className="text-violet-500">GROWTH</span>
            </p>
            <p className="text-md">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <div className="flex items-center gap-4">
              <input
                type="text"
                className="bg-slate-700 w-1/2 p-2 rounded-md border-none focus-visible:border-none"
                placeholder="Search your course..."
              />
              <button className="bg-violet-500 p-2 rounded-md">
                <IoSearch className="text-xl " />
              </button>
            </div>
            <p>
              We care about your data in our{" "}
              <span className="text-violet-500">privacy policy.</span>{" "}
            </p>
            <div className="flex items-center gap-4">
              {policies.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <IoIosCheckmark className="text-3xl" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
            <div>
              {list.map((item) => (
                <div className="">
                  <li className="hover:text-violet-500">{item}</li>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex flex-col justify-center items-center ">
            <button className="bg-violet-500 py-2 px-4 rounded-md absolute -left-12 lg:left-auto rotate-90 lg:rotate-0 lg:top-0">
              Quick Enquiry
            </button>
            <img
              src="/images/tree.png"
              alt="tree"
              className="w-full h-auto overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
