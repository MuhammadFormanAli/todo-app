import ContactVector1 from '@/public/contact-vector1.png'
import ContactVector2 from '@/public/contact-vector2.png'
import Image from 'next/image';

const ContactUs = () => {
    
  return (
    <div className="relative w-full bg-[#FAF5FF] mt-20 py-10">
       {/* glowing background  */}
       <div className="absolute w-full h-full flex flex-col justify-center items-center overflow-auto top-0 left-0 ">
        <div className="absolute  bottom-0 left-10 h-36 w-36 bg-[#F78A49] blur-[130px]"></div>
        <div className="absolute  bottom-0 left-1/2 h-36 w-36 bg-[#CD1CE6] bg-opacity-80 blur-[200px]"></div>
        <div className=" absolute z-0 top-0 right-3 h-36 w-36 bg-[#2194FF] bg-opacity-60 blur-[120px]"></div>
      </div>

      {/* content section */}
      <section className="text-[#272727] max-w-[1300px] mx-auto p-4 relative">
        <p className="text-6xl font-medium text-center py-9">
          Contact
          <span className=" inline-block mb-6 text-5xl  bg-gradient-to-r from-[#FF77AD] to-[#FFAC61] text-transparent bg-clip-text transition-colors duration-700  ">
            Us
          </span>
        </p>

        <div className=" border border-[#d680fe9a] rounded-md p-4 relative">
          <p>We are here for you! How can we help? </p>
          <form className="flex flex-col gap-6 items-end">
            <div className=" rounded-lg flex gap-6 w-full ">
              <div className="gradient-border rounded-lg w-full">
                <input
                  className=" outline-none rounded-lg w-full bg-gradient-to-r from-[#d680fe33] to-[#7a67f01a] bg-opacity-15  p-3 "
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                />
              </div>

              <div className="gradient-border rounded-lg w-full">
                <input
                  className=" outline-none rounded-lg w-full bg-gradient-to-r from-[#d680fe33] to-[#7a67f01a] bg-opacity-15  p-3 "
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>

              <div className="gradient-border rounded-lg w-full">
                <input
                  className=" outline-none rounded-lg w-full bg-gradient-to-r from-[#d680fe33] to-[#7a67f01a] bg-opacity-15  p-3 "
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="gradient-border rounded-lg w-full flex items-center justify-center ">
              <textarea
                className="w-full outline-none rounded-lg resize-none  bg-gradient-to-r from-[#d680fe33] to-[#7a67f033] bg-opacity-15  p-3 "
                name=""
                id=""
                rows="7"
                placeholder="Message"
              />
            </div>

            <button className=" py-3 px-6 rounded-lg  bg-gradient-to-br from-[#D680FE]  to-[#7A67F0] text-right text-white font-medium text-[18px] w-fit">Send Message</button>
          </form>

         

        </div>
      </section>

     
    </div>
  );
};

export default ContactUs;
