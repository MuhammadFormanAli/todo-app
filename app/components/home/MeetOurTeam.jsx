import React from "react";

const MeetOurTeam = () => {
  return (
    <div className="relative py-10">
      <div className="h-full w-full absolute top-0 left-0 -z-50">
        
      </div>

      {/* Team members heading  */}
      <div className="flex flex-col gap-6">
        <p className="text-6xl font-medium text-center ">
          Meet Our{" "}
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
      <div></div>
    </div>
  );
};

export default MeetOurTeam;
