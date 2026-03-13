import { GiWheat } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";

export default function ProductFeatures() {
  return (
    <section className="bg-[#F7F3D7] rounded-3xl py-10 md:py-14 px-6 md:px-10 my-14">

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-8 text-center">

        {/* Title */}
        <div className="col-span-2 md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A2C2A] leading-tight tracking-wide">
            HEALTHY <br /> SNACKS
          </h2>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-20 w-[2px] bg-[#E4DDB5]"></div>

        {/* No Added Sugar */}
        <div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#4A2C2A] leading-none">
            NO
          </h3>
          <p className="font-semibold text-[#4A2C2A] text-sm md:text-base">
            ADDED <br/> SUGAR
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-20 w-[2px] bg-[#E4DDB5]"></div>

        {/* High Protein */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-[#4A2C2A] rounded-full mb-2">
            <GiWheat className="text-xl md:text-2xl text-[#4A2C2A]" />
          </div>
          <p className="font-semibold text-[#4A2C2A] text-sm md:text-base">
            HIGH PROTEIN
          </p>
        </div>

        {/* All Natural */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-[#4A2C2A] rounded-full mb-2">
            <FaLeaf className="text-xl md:text-2xl text-[#4A2C2A]" />
          </div>
          <p className="font-semibold text-[#4A2C2A] text-sm md:text-base">
            ALL NATURAL
          </p>
        </div>

        {/* High Fibre */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border-2 border-[#4A2C2A] rounded-full mb-2">
            <GiMuscleUp className="text-xl md:text-2xl text-[#4A2C2A]" />
          </div>
          <p className="font-semibold text-[#4A2C2A] text-sm md:text-base">
            HIGH FIBRE
          </p>
        </div>

      </div>

    </section>
  );
}