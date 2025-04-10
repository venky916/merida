import clsx from "clsx";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const SMMPage = () => {
  const SMMRoutes = [
    {
      label: "instagram",
      path: "/portfolio/d-marketing-and-lead-generation/smm/instagram",
    },
    {
      label: "facebook",
      path: "/portfolio/d-marketing-and-lead-generation/smm/facebook",
    },
  ];
  const location = useLocation();

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-10">
        {SMMRoutes.map((route, index) => {
          const isActive = location.pathname.startsWith(
            route.path.split("/").slice(0, 5).join("/")
          );
          return (
            <Link to={route.path} key={index} className="">
              <p
                className={clsx(
                  "font-normal text-xl capitalize p-2",
                  isActive && "underline"
                )}
              >
                {route.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SMMPage;
