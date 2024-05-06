import Image from "next/image";
import React from "react";
import teamProjectImage from "@/public/creativeTeamProject/creative-team-project-image.png";
import { PiWrenchFill } from "react-icons/pi";
import { MdFileCopy } from "react-icons/md";

const CreativeTeamProject = () => {
  return (
    <div className="flex items-center justify-between gap-3 max-w-[1300px] mx-auto p-4 mt-10">
      <section className="max-w-[525px] flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <p className="text-5xl font-medium text-left ">
            Get Best Projects With
            <br />{" "}
            <span className=" inline-block text-5xl font-bold  bg-gradient-to-r from-[#a16afe] vai-[#FF77AD] to-[#FFAC61] text-transparent bg-clip-text ">
              Creative Team.
            </span>
          </p>
          <p className=" font-medium text-lg mx-auto text-left text-[#090909] text-opacity-75">
            Our team boasts exceptional creativity and design prowess coupled
            with a deep understanding of user experience principles, ensuring
            innovative and user-centric solutions.
          </p>
        </div>


        <div className="flex justify-between items-center gap-5">
          <div className="p-6 border rounded-md h-full ">
            <span className="inline-block text-2xl font-bold text-white rounded-full p-3 bg-[#FEEAFF]">
              {" "}
              <MdFileCopy className="bg-[#D171D5] rounded-full p-1" />
            </span>
            <h4 className="text-[#030712] font-medium text-lg">
              User-Friendly Projects
            </h4>
            <p className="text-[#4B5563] font-medium text-sm ">
              We build UI/UX design with proper UX guidance and seamless
              navigation.
            </p>
          </div>
          <div className="p-6 border rounded-md h-full ">
            <span className="inline-block text-2xl font-bold text-white rounded-full p-3 bg-[#FFF5EF]">
              {" "}
              <PiWrenchFill className="bg-[#FFA769] rounded-full p-1" />
            </span>
            <h4 className="text-[#030712] font-medium text-lg">
              User-Friendly Projects
            </h4>
            <p className="text-[#4B5563] font-medium text-sm ">
              We build UI/UX design with proper UX guidance and seamless
              navigation.
            </p>
          </div>
        </div>
      </section>
      <Image className="" src={teamProjectImage} alt="image" />
    </div>
  );
};

export default CreativeTeamProject;
