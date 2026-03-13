import React from "react";

function OurStory() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Story
      </h1>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

        {/* Image */}
        <img
          src="sweet1.png"
          alt="Namkeen"
          className="rounded-xl shadow-lg"
        />

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Traditional Taste
          </h2>

          <p className="text-gray-600 leading-7">
            Our journey started with a passion for making authentic Indian
            namkeen and delicious ladoos using traditional recipes. We focus
            on quality ingredients and homemade taste so every bite reminds
            you of the flavors of home.
          </p>
        </div>

      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Handmade With Love
          </h2>

          <p className="text-gray-600 leading-7">
            Every product we create is prepared with care and dedication.
            From crispy namkeen to sweet ladoos, our goal is to deliver
            fresh, tasty, and high-quality snacks to every customer.
          </p>
        </div>

        {/* Image */}
        <img
          src="sweet2.png"
          alt="Ladoo"
          className="rounded-xl shadow-lg"
        />

      </div>

    </div>
  );
}

export default OurStory;