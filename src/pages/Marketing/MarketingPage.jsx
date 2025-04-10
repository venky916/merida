import clsx from "clsx";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const MarketingPage = () => {
  const MarketingPageRoutes = [
    {
      label: "SMM",
      path: "/portfolio/d-marketing-and-lead-generation/smm",
    },
    {
      label: "SEO",
      path: "/portfolio/d-marketing-and-lead-generation/seo",
    },
    {
      label: "SEM",
      path: "/portfolio/d-marketing-and-lead-generation/sem",
    },
    {
      label: "Linkedin",
      path: "/portfolio/d-marketing-and-lead-generation/linkedin",
    },
    {
      label: "whatsapp and email campaign",
      path: "/portfolio/d-marketing-and-lead-generation/whatsapp-and-email-campaign",
    },
  ];

  const location = useLocation();

  return (
    <div className="drop-shadow-figma">
      <div className="flex items-center gap-0 sm:gap-5 md:gap-14 ">
        {MarketingPageRoutes.map((route, index) => {
          const isActive = location.pathname.startsWith(
            route.path.split("/").slice(0, 4).join("/")
          );
          return (
            <Link to={route.path} key={index} className="">
              <div
                className={clsx(
                  "p-4 capitalize hover:text-[#2B60FA]/70 ",
                  isActive
                    ? "rounded-t-xl shadow-md text-[#2B60FA]"
                    : "text-[#2C313F]"
                )}
              >
                <p className="font-medium text-sm md:text-xl line-clamp-2">
                  {route.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="-mt-2 shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
};

export default MarketingPage;
