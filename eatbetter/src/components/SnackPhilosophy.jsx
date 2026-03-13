import { GiPlantRoots, GiPeanut } from "react-icons/gi";
import { MdOutlineRestaurant } from "react-icons/md";

export default function SnackPhilosophy() {
  return (
    <section className="bg-[#f7f5e7] py-24 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-12 leading-tight">
            WE MAKE SNACKS <br /> THAT ARE
          </h2>

          <div className="space-y-10">

            {/* Mindful */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-700 rounded-xl text-2xl">
                <GiPlantRoots />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Mindful
                </h3>

                <p className="text-gray-600 mt-1 max-w-md">
                  Crafted with wholesome ingredients like millets,
                  nuts and natural flavours.
                </p>
              </div>
            </div>

            {/* Tummyfull */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-700 rounded-xl text-2xl">
                <GiPeanut />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Tummyfull
                </h3>

                <p className="text-gray-600 mt-1 max-w-md">
                  Our laddoos and namkeen keep you energized
                  and satisfied throughout the day.
                </p>
              </div>
            </div>

            {/* Tasteful */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-700 rounded-xl text-2xl">
                <MdOutlineRestaurant />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-900">
                  Tasteful
                </h3>

                <p className="text-gray-600 mt-1 max-w-md">
                  Delicious flavours you love without
                  compromising on nutrition.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-end">

          <img
            src="/snack.png"
            alt="Healthy Snacks"
            className="w-[720px] lg:w-[850px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}