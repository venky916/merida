import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import Home from "./pages/home/Home";
import LogoDesigning from "./pages/logo-designing/LogoDesigning";
import WebAppDevelopment from "./pages/web-app-development/WebAppDevelopment";
import AppDevelopment from "./pages/app-development/AppDevelopment";
import WebsiteDevelopment from "./pages/website-development/WebsiteDevelopment";
import GraphicDesign from "./pages/graphic-design/GraphicDesign";
import MarketingPage from "./pages/Marketing/MarketingPage";
import SEOPage from "./pages/Marketing/SEOPage";
import SMMPage from "./pages/Marketing/SMMPage";
import FacebookPage from "./pages/Marketing/FacebookPage";
import InstagramPage from "./pages/Marketing/InstagramPage";
import LinkedInPage from "./pages/Marketing/LinkedInPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/portfolio",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="logo-designing" replace />,
        },
        {
          path: "logo-designing",
          element: <LogoDesigning />,
        },
        {
          path: "web-app-development",
          element: <WebAppDevelopment />,
        },
        {
          path: "app-development",
          element: <AppDevelopment />,
        },
        {
          path: "website-development",
          element: <WebsiteDevelopment />,
        },
        {
          path: "graphic-design",
          element: <GraphicDesign />,
        },
        {
          path: "d-marketing-and-lead-generation",
          element: <MarketingPage />,
          children: [
            {
              index: true,
              element: <Navigate to="seo" replace />,
            },
            {
              path: "seo",
              element: <SEOPage />,
            },
            {
              path: "smm",
              element: <SMMPage />,
              children: [
                {
                  index: true,
                  element: <Navigate to="facebook" replace />,
                },
                {
                  path: "facebook",
                  element: <FacebookPage />,
                },
                {
                  path: "instagram",
                  element: <InstagramPage />,
                },
              ],
            },
            {
              path: "linkedin",
              element: <LinkedInPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
