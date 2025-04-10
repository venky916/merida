import React from "react";
import SEOLandingImage from "../../assets/images/marketingPageImages/SEOPage/seo-landing-image.png";
import Image1 from "../../assets/images/marketingPageImages/SEOPage/image-1.jpg";
import Image2 from "../../assets/images/marketingPageImages/SEOPage/image-2.jpg";
import Image3 from "../../assets/images/marketingPageImages/SEOPage/image-3.jpg";
import Image4 from "../../assets/images/marketingPageImages/SEOPage/image-4.jpg";
import Image5 from "../../assets/images/marketingPageImages/SEOPage/image-5.jpg";

import Grid1 from "../../assets/images/marketingPageImages/SEOPage/grid-images/grid-image-1.jpg";
import Grid2 from "../../assets/images/marketingPageImages/SEOPage/grid-images/grid-image-2.jpg";
import Grid3 from "../../assets/images/marketingPageImages/SEOPage/grid-images/grid-image-3.jpg";
import Grid4 from "../../assets/images/marketingPageImages/SEOPage/grid-images/grid-image-4.jpg";
import Grid5 from "../../assets/images/marketingPageImages/SEOPage/grid-images/grid-image-5.jpg";
import Grid6 from "../../assets/images/marketingPageImages/SEOPage/grid-images/grid-image-6.jpg";

const ImageComponent = ({ image }) => {
  return (
    <div>
      <img src={image} alt="image" />
    </div>
  );
};

const SubBodyComponent = ({ content }) => {
  return (
    <div className="p-4">
      <p className="font-medium text-2xl text-[#2C313F]">{content.header}</p>
      <p className="font-normal text-xl text-[#2C313F]">{content.bodyText}</p>
    </div>
  );
};

const footerText = [
  "Higher rankings that put you ahead of your competition",
  "More visitors who are actually looking for what you offer",
  "Website content that search engines love and people enjoy",
  " Faster site speed so visitors stay longer and take action",
  "A strong online presence that keeps growing over time",
  "SEO strategies that keep working and bring lasting results",
];

const BodyText = [
  {
    header: "Competitor Analysis and Keyword Research",
    bodyText:
      " We figure out what your competitors are doing right, find the exact words people search for, and make sure your website speaks their language so it shows up first.",
  },
  {
    header: "On-Page SEO",
    bodyText:
      "Your website needs to make sense to both people and search engines. We fix your titles, headings, and the entire meta content so Google knows what you are about, and visitors find what they need without a hassle.",
  },
  {
    header: "Off-Page SEO",
    bodyText:
      "Google trusts websites that others talk about. We help you get mentions, quality backlinks, and a strong online presence so your website is seen as important and ranks where it belongs—at the top.",
  },
  {
    header: "Local SEO",
    bodyText:
      "If someone nearby searches for what you offer, your business should pop up first. We set up your Google profile, optimize your listings, and make sure locals find you fast when they need you.",
  },
  {
    header: "Technical SEO",
    bodyText:
      "A slow or glitchy website pushes people away. We make sure your site loads fast, works smoothly on any device, and is easy for search engines to crawl so nothing holds you back from ranking higher.",
  },
];

const SEOPage = () => {
  return (
    <div className="bg-white py-4 shadow-md rounded-xl ">
      {/* hero*/}
      <div className="bg-[#EDEDED] m-1 md:m-3 p-4 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="w-full md:w-1/2">
          <p className="font-semibold text-4xl text-[#2B60FA]">
            Search Engine Optimization{" "}
            <span className="text-[#343434]">
              – Get Seen By The Right People
            </span>{" "}
          </p>
          <p className="font-normal text-xl text-[#2C313F] mt-4">
            Ever searched for something on Google and noticed some websites
            always show up first? That is SEO working behind the scenes. It
            helps your website rank higher so the right people can find you
            easily. More visibility means more visitors, and more visitors mean
            more business.  SEO is not a one-time thing as it involves
            continuous updates, tweaks, and changing strategies. We at Merida
            Tech Minds do all the behind-the-scenes work so your website climbs
            up the ranks while you focus on running your business. 
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={SEOLandingImage}
            alt="Landing image"
            className="w-full h-auto scale-140"
          />
        </div>
      </div>
      {/* section-2 */}
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
      {/* BottomSection */}
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

export default SEOPage;
