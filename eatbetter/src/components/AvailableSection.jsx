export default function AvailableSection() {
  return (
    <section className="bg-gray-100 py-16">

      {/* Side spacing container */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Rounded card */}
        <div className="bg-[#F7B731] rounded-3xl px-12 py-16 grid md:grid-cols-2 items-center gap-12">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-5xl font-semibold text-gray-700 mb-6">
              We're Available
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-gray-700 text-white px-6 py-2 rounded-xl text-3xl font-bold italic">
                Anytime
              </span>

              <span className="text-3xl font-bold italic text-gray-700">
                Anywhere!
              </span>
            </div>

            <p className="text-xl text-gray-600">
              Shop Your Favourite Snacks
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/available.png"
              alt="Platforms"
              className="w-full max-w-md object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}