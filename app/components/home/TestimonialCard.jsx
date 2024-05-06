import Image from "next/image";
import TeamMember1 from "@/public/OurTeam/member-1.png";
import flag from "@/public/flag.png";
import quote from "@/public/quote.png";
import { FaStar } from "react-icons/fa";


const TestimonialCard = () => {
  return (
    <div className=" relative max-w-[625px] p-5 border border-[#C71CE6] rounded-2xl border-opacity-35 mx-auto flex flex-col gap-4  ">
        <Image className="absolute top-[-30px] right-[30px] bg-white" src={quote} alt="quote image" />
      <h1 className="text-2xl font-medium">Muhammad Ali</h1>
      <div className="flex justify-between">
        <div className="font-medium text-lg flex items-center gap-2">United States <span> <Image src={flag} alt="flag" /> </span></div>
        <div className="flex items-center text-xl text-[#FFC01D]"><span className="mr-1 text-black font-bold">5.0</span> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
      </div>
      <div className="flex gap-2 items-center">
        <Image className="h-36 w-36 border rounded-md" src={TeamMember1} alt="image" />
        <p className="text-justify">
          Jasim's work was fantastic! I did not have a clear vision of what I
          wanted the output to be, but he took my requirements and brought it to
          life in ways that exceeded my expectations and initial vision.
          Communication was excellent and the quality of work was outstanding.
          Highly recommend!
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
