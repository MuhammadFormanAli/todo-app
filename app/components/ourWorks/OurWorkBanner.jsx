import React from "react";

const OurWorkBanner = () => {
  return (
    <div className="bg-[#FAF5FF] w-full pt-6 pb-12 ">
      {/* content area  */}
      <div className="flex flex-col items-center justify-center ">
        <div className=" p-[2px] mb-4  rounded-lg bg-gradient-to-br from-[#A16AFE] via-[#FF77AD] to-[#FFAC61]  ">
          <button className="bg-white bg-opacity-50 rounded-lg px-6 py-3">Our Projects</button>
        </div>
        <p className="text-6xl font-bold">Android, iOS Mobile App,</p>
        <p className=" mb-6 text-6xl font-bold bg-gradient-to-r from-[#A16AFE] via-[#FF77AD] to-[#FFAC61] text-transparent bg-clip-text ">Website, Dashboard & More+</p>
        <p className=" max-w-[750px] text-[#707070] text-[20px]  text-center ">
          Discover our design journey, Explore sleek UI and immersive UX
          experiences in our portfolio. Each project reflects a commitment to
          seamless design and user-centric solutions.new
        </p>
        <button className=" py-3 px-6 rounded-lg  bg-gradient-to-br from-[#D680FE]  to-[#7A67F0] my-12 ">Contact Us</button>
      </div>
    </div>
  );
};

export default OurWorkBanner;
