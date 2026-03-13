import { GiWheat } from "react-icons/gi";
import { FaCube } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { FaTint } from "react-icons/fa";

export default function BunkTheJunk() {
  return (
    <section className="bg-[#efe7dc] py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* LEFT SIDE */}
        <div className="flex items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3e2723] rotate-[-8deg] tracking-wide ml-10">
            #BunkTheJunk
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="border-l border-[#6d4c41] pl-10 mt-10 md:mt-0">

          <h3 className="text-lg tracking-widest mb-8 text-[#3e2723] font-semibold">
            OUR SNACKS ARE FREE FROM
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* Gluten */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 border border-[#6d4c41] rounded-full flex items-center justify-center text-xl text-[#3e2723]">
                <GiWheat />
              </div>
              <p className="mt-2 text-sm font-medium text-[#3e2723]">GLUTEN</p>
            </div>

            {/* Added Sugar */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 border border-[#6d4c41] rounded-full flex items-center justify-center text-xl text-[#3e2723]">
                <FaCube />
              </div>
              <p className="mt-2 text-sm font-medium text-[#3e2723]">ADDED SUGAR</p>
            </div>

            {/* Preservatives */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 border border-[#6d4c41] rounded-full flex items-center justify-center text-xl text-[#3e2723]">
                <MdOutlineScience />
              </div>
              <p className="mt-2 text-sm font-medium text-[#3e2723]">PRESERVATIVES</p>
            </div>

            {/* Trans Fat */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 border border-[#6d4c41] rounded-full flex items-center justify-center text-xl text-[#3e2723]">
                <FaTint />
              </div>
              <p className="mt-2 text-sm font-medium text-[#3e2723]">TRANS-FAT</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}