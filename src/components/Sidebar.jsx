import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

// Import your icons
import MarketingLogo from "../assets/images/layoutPageImages/sidebarImages/marketing-logo.svg";
import AppDevelopment from "../assets/images/layoutPageImages/sidebarImages/app-development-logo.svg";
import GraphicDesign from "../assets/images/layoutPageImages/sidebarImages/graphic-design-logo.svg";
import LogoDesign from "../assets/images/layoutPageImages/sidebarImages/logo-designing-logo.svg";
import WebAppLogo from "../assets/images/layoutPageImages/sidebarImages/web-app-logo.svg";
import WebSiteDevelopmentLogo from "../assets/images/layoutPageImages/sidebarImages/website-development-logo.svg";

const Sidebar = () => {
  const mainRoutes = [
    {
      label: "logo designing",
      logo: LogoDesign,
      path: "/portfolio/logo-designing",
    },
    {
      label: "web app development",
      logo: WebAppLogo,
      path: "/portfolio/web-app-development",
    },
    {
      label: "app development",
      logo: AppDevelopment,
      path: "/portfolio/app-development",
    },
    {
      label: "website development",
      logo: WebSiteDevelopmentLogo,
      path: "/portfolio/website-development",
    },
    {
      label: "graphic design",
      logo: GraphicDesign,
      path: "/portfolio/graphic-design",
    },
    {
      label: "D.marketing and lead generation",
      logo: MarketingLogo,
      path: "/portfolio/d-marketing-and-lead-generation/seo", // Default to SEO
    },
  ];

  const location = useLocation();

  return (
    <div className="fixed top-24 md:top-44">
      <div className=" flex flex-col gap-5 justify-center">
        {mainRoutes.map((route, index) => {
          const isActive = location.pathname.startsWith(
            route.path.split("/").slice(0, 3).join("/")
          );

          return (
            <Link
              to={route.path}
              key={index}
              className="relative no-underline group"
            >
              {/* Main button */}
              <div
                className={clsx(
                  "w-14 h-8 md:w-42 md:h-16 text-white rounded-sm flex items-center gap-4 p-4 z-20",
                  "transition-colors duration-200",
                  isActive
                    ? "bg-[#2B60FA]"
                    : "bg-[#1E1B19] group-hover:bg-[#2B60FA]/80"
                )}
              >
                <div>
                  <img
                    src={route.logo}
                    alt={`${route.label} icon`}
                    className="w-6 h-6 md:w-8 md:h-8 min-w-0 flex-shrink-0 "
                  />
                </div>
                <div className="hidden md:block">
                  <p className="font-normal text-sm capitalize">
                    {route.label}
                  </p>
                </div>
              </div>

              {/* Border effect */}
              <div
                className={clsx(
                  "absolute top-2 left-1 rounded-sm border border-[#1E1B19] w-14 h-8 md:w-42 md:h-16 -z-10",
                  "transition-all duration-200",
                  isActive
                    ? "border-[#2B60FA]"
                    : "group-hover:border-[#2B60FA]/30"
                )}
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
