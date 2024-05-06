import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import TeamMember1 from "@/public/OurTeam/member-1.png";
import TeamMember2 from "@/public/OurTeam/member-2.png";
import TeamMember3 from "@/public/OurTeam/member-3.png";
import TeamMember4 from "@/public/OurTeam/member-4.png";
import TeamMember5 from "@/public/OurTeam/member-5.png";
import TeamMember6 from "@/public/OurTeam/member-6.png";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jasim Uddin",
      designation: "CEO & Founder",
      image: TeamMember1,
    },
    {
      id: 2,
      name: "Pronob Ghosh",
      designation: "Chairman",
      image: TeamMember2,
    },
    {
      id: 3,
      name: "K M Jubayer Abdullah",
      designation: "Marketing Manager",
      image: TeamMember3,
    },
    {
      id: 4,
      name: "Zarin Jasia Oishi",
      designation: "Social Media Manager",
      image: TeamMember4,
    },
    {
      id: 5,
      name: "H.M. Nazmus Sakib",
      designation: "HR & Admin",
      image: TeamMember5,
    },
    {
      id: 6,
      name: "Nafisa T. Disha",
      designation: "UI UX Design Team Lead",
      image: TeamMember6,
    },
  ];
  return (
    <div className="relative py-10 flex flex-col gap-20 ">
      <div className="h-full w-full absolute top-0 left-0 -z-50 flex items-center justify-evenly overflow-hidden">
        <div className="h-60 w-60 bg-[#CD1CE6] bg-opacity-80 blur-[200px]"></div>
        <div className="h-60 w-60  bg-[#2194FF] bg-opacity-80 blur-[200px]"></div>
      </div>

      {/* Team members heading  */}
      <div className="flex flex-col gap-6">
        <p className="text-6xl font-medium text-center ">
          Meet Our
          <span className=" inline-block text-6xl font-bold ml-1  bg-gradient-to-r from-[#FF77AD] to-[#FFAC61] text-transparent bg-clip-text ">
            Teams
          </span>
        </p>
        <p className="max-w-[500px] font-medium text-lg mx-auto text-center text-[#090909] text-opacity-75">
          We Want To Help You Build The Next Unicorn With Products That
          Obsessively Focus On A Sublime User Experience.
        </p>
      </div>

      {/* place for showing member cards  */}
      <div className=" max-w-[1300px] mx-auto px-4 grid grid-cols-3 gap-10 place-content-center">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
