import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Vertical label for large screens */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          About me
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            the face behind the skills
          </p>
          <p className="text-gray-200 text-sm lg:text-lg text-justify">
            {personalData.description}
          </p>
        </div>

        {/* Profile Image Section */}
       <div className="flex justify-center order-1 lg:order-2 mt-25">
  <div className="w-[280px] h-[320px] absolute lg:relative rounded-lg overflow-hidden shadow-lg transition-transform duration-700 hover:scale-105 hover:rotate-3 hover:shadow-xl">
    <Image
      src={personalData.profile}
      fill
      alt="Chandan Raj"
      className="object-cover rounded-lg transition-transform duration-700 hover:scale-105 hover:rotate-3 hover:shadow-lg cursor-pointer"
    />
      </div>
    </div>
  </div>
</div>
  );
}

export default AboutSection;
