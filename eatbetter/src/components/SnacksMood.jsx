import { Link } from "react-router-dom"

export default function SnacksMood() {
  return (
    <section className="bg-gray-100 py-12 md:py-16">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-12 px-4">
        <h2 className="text-xl md:text-4xl font-bold text-gray-800">
          SNACKS FOR EVERY MOOD 😋 – MEETHA YA NAMKEEN!
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-6">

        {/* Meetha Card */}
        <Link to="/protein-laddoos">
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-square max-h-[380px] md:max-h-none">

            <img
              src="/sweet2.png"
              alt="Better Meetha"
              className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 md:px-8 md:py-4 rounded-xl border border-white/30">
                <h3 className="text-white text-xl md:text-3xl font-bold">
                  BETTER MEETHA
                </h3>
              </div>
            </div>

          </div>
        </Link>

        {/* Namkeen Card */}
        <Link to="/chatpata-namkeen">
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-square max-h-[380px] md:max-h-none">

            <img
              src="/sweet1.png"
              alt="Better Namkeen"
              className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 md:px-8 md:py-4 rounded-xl border border-white/30">
                <h3 className="text-white text-xl md:text-3xl font-bold">
                  BETTER NAMKEEN
                </h3>
              </div>
            </div>

          </div>
        </Link>

      </div>

    </section>
  )
}