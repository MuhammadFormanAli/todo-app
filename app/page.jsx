
import OurWorkBanner from "./components/ourWorks/OurWorkBanner";
import WorkCard from "./components/ourWorks/WorkCard";
import CourseCard from "./components/CoursePage/CourseCard";
import FunFact from "./components/home/FunFact";
import ContactUs from "./components/contactUs/ContactUs";
import MeetOurTeam from "./components/home/MeetOurTeam";

export default function Home() {
  
  return (
    <div>
      {/* <OurWorkBanner />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[1296px] mx-auto  my-20 px-4 ">
        <WorkCard />
        <WorkCard />
      </div>

      <div>
        <p className="text-center font-bold text-3xl p-4">Our course</p>
        <CourseCard />

      </div> 

     <FunFact />

    <ContactUs /> */}

    <MeetOurTeam />
      
    </div>
  );
}
