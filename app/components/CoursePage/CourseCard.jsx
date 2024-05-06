import Image from "next/image";
import React from "react";
import courseImage from "@/public/course-img.png";

const CourseCard = () => {
  return (
    <div className="max-w-[1296px] mx-auto border flex flex-col justify-center rounded-lg p-12 ">
      <div className="relative h-full w-full">
        <Image src={courseImage} alt="Course Image" />
        <div className="absolute top-0 left-0 flex flex-col items-end justify-between w-full h-full z-10 p-10 text-white ">
          <div className="bg-white h-20 w-20 rounded-full"></div>
          <button className=" py-3 px-6 mb-4  rounded-lg bg-gradient-to-br from-[#A16AFE] via-[#FF77AD] to-[#FFAC61]  ">
            View Courses
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12">
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-medium">UI UX Design</p>
          <div className="flex gap-8">
            <p>6 Months</p>
            <p>50 Lessons</p>
          </div>
          <p>
            5.0 ***** <span>(120 Reviews)</span>
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p>
            <span className="line-through">10000 BDT</span> 3500 BDT
          </p>
            <p>12k People Engage </p>
          <div className="flex gap-6">
          <button className=" font-medium text-lg text-white py-3 px-6 rounded-lg  bg-gradient-to-r from-[#D680FE]  to-[#7A67F0] ">Book A Seat</button>
          <button className=" border py-3 px-6 rounded-lg  bg-gradient-to-r from-[#D680FE]  to-[#7A67F0] text-transparent bg-clip-text ">Details</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseCard;
