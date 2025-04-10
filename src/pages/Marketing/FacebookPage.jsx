import React from "react";
import FacebookImage from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/Facebook-Landing-Image.png";
import Image1 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/image-1.jpg";
import Image2 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/image-2.jpg";
import Image3 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/image-3.jpg";
import Image4 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/image-4.jpg";
import Image5 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/image-5.jpg";

import Grid1 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/gridImages/grid-image-1.jpg";
import Grid2 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/gridImages/grid-image-2.jpg";
import Grid3 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/gridImages/grid-image-3.jpg";
import Grid4 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/gridImages/grid-image-4.jpg";
import Grid5 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/gridImages/grid-image-5.jpg";
import Grid6 from "../../assets/images/marketingPageImages/SMMPage/FacebookPage/gridImages/grid-image-6.jpg";

const ImageComponent = ({ image }) => {
  return (
    <div>
      <img src={image} alt="image" />
    </div>
  );
};

const SubBodyComponent = ({ content }) => {
  return (
    <div className="p-4 w-full mx-auto">
      <p className="font-medium text-2xl text-[#2C313F] w-1/2">{content.header}</p>
      <p className="font-normal text-xl text-[#2C313F]">{content.bodyText}</p>
    </div>
  );
};

const BodyText = [
  {
    header: "Getting to Know Your Business First",
    bodyText:
      "We sit with you and take time to understand your business, goals, and audience. The right plan starts with knowing who you want to reach and how to connect with them.",
  },
  {
    header: "Giving Your Facebook Page a Complete Makeover",
    bodyText:
      "Starting fresh? We’ll build your page from scratch. Already have one? We’ll optimize everything from bios to banners to make sure your brand looks professional and trustworthy.",
  },
  {
    header: "Creating Posts That People Love to Engage With",
    bodyText:
      "People scroll fast, so your content needs to stop them. Videos, posts, stories, and ads – everything we create is designed to grab attention, spark conversations, and keep people coming back.",
  },
  {
    header: "Running Ads That Bring in Real Customers",
    bodyText:
      "Getting views isn’t enough. We set up smart ads that reach the right people—the ones who are actually interested and ready to take action.",
  },
  {
    header: "Tracking and Improving Every Single Day",
    bodyText:
      "Facebook marketing isn’t a one-time thing. We keep an eye on what’s working, adjust what’s not, and keep improving so your Facebook page keeps growing.",
  },
];

const footerText = [
  "More likes, shares, and comments from real people",
  "A page that looks professional and builds trust instantly",
  "Ads that bring real buyers, not just empty clicks",
  "Content that stops the scroll and gets people talking",
  "A community that grows and stays engaged every day",
  "A strategy that keeps bringing better results over time",
];

const FacebookPage = () => {
  return (
    <div>
      {/* hero */}
      <div className="bg-[#EDEDED] m-3 p-8 flex flex-col md:flex-row items-center gap-2 pb-4">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-5 w-full md:w-1/2 mx-auto">
            <p className="font-semibold text-4xl capitalize text-[#343434]">
              Smart <span className="text-[#2B60FA]">Facebook Marketing</span>{" "}
              for More Reach and More Revenue
            </p>
            <p className="font-normal text-xl text-[#2C313F]">
              Facebook has been around forever! It is still where conversations
              happen, connections grow, and brands get noticed. Scrolling past
              boring content? Not anymore. We create posts, ads, and stories
              that grab attention, spark real engagement, and bring in customers
              who actually care about what you offer.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#EDEDED]">
          <img
            src={FacebookImage}
            alt="Facebook landing"
            className="w-full h-auto scale-125"
          />
        </div>
      </div>

      {/* section-1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image 1 - Desktop: left, Mobile: first */}
        <div className="md:order-1 order-1">
          <ImageComponent image={Image1} />
        </div>

        {/* Text 1 - Desktop: right, Mobile: second */}
        <div className="md:order-2 order-2">
          <SubBodyComponent content={BodyText[0]} />
        </div>

        {/* Text 2 - Desktop: left (below Image1), Mobile: third */}
        <div className="md:order-3 order-4">
          <SubBodyComponent content={BodyText[1]} />
        </div>

        {/* Image 2 - Desktop: right (below Text1), Mobile: fourth */}
        <div className="md:order-4 order-3">
          <ImageComponent image={Image2} />
        </div>

        {/* Image 3 - Desktop: left, Mobile: fifth */}
        <div className="md:order-5 order-5">
          <ImageComponent image={Image3} />
        </div>

        {/* Text 3 - Desktop: right, Mobile: sixth */}
        <div className="md:order-6 order-6">
          <SubBodyComponent content={BodyText[2]} />
        </div>

        {/* Text 4 - Desktop: left (below Image3), Mobile: seventh */}
        <div className="md:order-7 order-8">
          <SubBodyComponent content={BodyText[3]} />
        </div>

        {/* Image 4 - Desktop: right (below Text3), Mobile: eighth */}
        <div className="md:order-8 order-7">
          <ImageComponent image={Image4} />
        </div>

        {/* Image 5 - Desktop: left, Mobile: ninth */}
        <div className="md:order-9 order-9">
          <ImageComponent image={Image5} />
        </div>

        {/* Text 5 - Desktop: right, Mobile: tenth */}
        <div className="md:order-10 order-10">
          <SubBodyComponent content={BodyText[4]} />
        </div>
      </div>

      {/* footer section */}
      <div className="bg-[#EDEDED] m-1 md:m-3 p-4 md:p-8  flex flex-col md:flex-row md:items-center gap-6">
        <div className="grid grid-cols-2 gap-5 w-full md:w-1/2">
          {/* grid images */}
          <img src={Grid1} className="cols-span-1" />
          <img src={Grid3} className="row-span-2" />
          <img src={Grid2} className="cols-span-1" />
          <img src={Grid4} className="row-span-2" />
          <img src={Grid5} className="cols-span-1" />
          <img src={Grid6} className="cols-span-1" />
        </div>
        <div className="w-full max-w-7xl md:w-1/2  md:p-16">
          <p className="font-medium text-3xl">
            Here’s What You Get Out of This
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-4">
            {footerText.map((footer, index) => (
              <li key={index} className="font-normal text-xl capitalize">
                {footer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FacebookPage;
