import React from "react";
import LinkedinImage from "../../assets/images/marketingPageImages/LinkeedinPage/linkedin-landining-image.jpg";

import Image1 from "../../assets/images/marketingPageImages/LinkeedinPage/image-1.jpg";
import Image2 from "../../assets/images/marketingPageImages/LinkeedinPage/image-2.jpg";
import Image3 from "../../assets/images/marketingPageImages/LinkeedinPage/image-3.jpg";
import Image4 from "../../assets/images/marketingPageImages/LinkeedinPage/image-4.jpg";
import Image5 from "../../assets/images/marketingPageImages/LinkeedinPage/image-5.jpg";

import Grid1 from "../../assets/images/marketingPageImages/LinkeedinPage/grid-images/grid-image-1.jpg";
import Grid2 from "../../assets/images/marketingPageImages/LinkeedinPage/grid-images/grid-image-2.jpg";
import Grid3 from "../../assets/images/marketingPageImages/LinkeedinPage/grid-images/grid-image-3.jpg";
import Grid4 from "../../assets/images/marketingPageImages/LinkeedinPage/grid-images/grid-image-4.jpg";
import Grid5 from "../../assets/images/marketingPageImages/LinkeedinPage/grid-images/grid-image-5.jpg";
import Grid6 from "../../assets/images/marketingPageImages/LinkeedinPage/grid-images/grid-image-6.jpg";

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

const BodyText = [
  {
    header: "Getting Your LinkedIn Profile Ready",
    bodyText:
      "A strong LinkedIn profile builds trust. We set up or optimize your profile so it looks professional, attracts the right people, and makes a great first impression.",
  },
  {
    header: "Posting Content That Grabs Attention",
    bodyText:
      "Boring content won’t work here. We create posts, articles, and updates that spark conversations, showcase your expertise, and make your brand stand out in the right way.",
  },
  {
    header: "Growing Your Network With the Right People",
    bodyText:
      "More connections equals more opportunities! We help you reach an ideal audience and serious professionals so you build connections that actually matter for your business.",
  },
  {
    header: "Running LinkedIn Ads That Bring Real Leads",
    bodyText:
      "LinkedIn ads can be powerful, but only if done right. We set up targeted campaigns that reach serious professionals who are actually interested, making sure you get real engagement and quality leads.",
  },
  {
    header: "Tracking and Improving for Better Results",
    bodyText:
      "We keep an eye on what’s working, adjust what’s not, and keep improving so your LinkedIn presence keeps growing and bringing in valuable business opportunities.",
  },
];

const footerText = [
  "A profile that makes you look like an industry leader, not just another user",
  "Posts that start real conversations & keep your audience engaged",
  "A network filled with serious professionals and real opportunities",
  "Ads that bring high-value clients, not just random clicks",
  "A brand presence that builds trust and credibility",
  "A strategy that keeps your LinkedIn growing & bringing results every single day",
];

const LinkedInPage = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl py-4">
      <div className="flex flex-col md:flex-row gap-6 bg-[#EDEDED] items-center p-8 m-3">
        <div className="w-full  md:w-1/2 h-auto bg-[#EDEDED]">
          <img src={LinkedinImage} alt="linkedIn" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full md:w-3/4 ml-auto">
            <div className="text-end">
              <p className="font-semibold text-5xl text-[#343434]">
                <span className="text-[#0041FF]">LinkedIn Marketing </span>To
                Build Authority and Brings Growth Opportunities
              </p>
              <p className="font-normal text-xl text-[#2C313F]">
                LinkedIn is not for mindless scrolling. It is where serious
                professionals connect, learn, and grow. A strong LinkedIn
                presence makes your brand look legit, builds trust, and attracts
                the right people. We create posts, ads, and strategies that
                boost engagement, grow your network, and bring real business
                opportunities straight to you.
              </p>
            </div>
          </div>
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

export default LinkedInPage;
