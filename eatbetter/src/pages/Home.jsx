import React from "react";

function Home() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-green-50 py-12 text-center">
        <h1 className="text-5xl font-bold text-green-700">
          Eat Healthy Stay Fit
        </h1>
        <p className="mt-4 text-gray-600">
          Discover healthy food near you
        </p>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Search healthy food..."
            className="px-6 py-3 w-96 rounded-full border"
          />
        </div>
      </div>


      {/* Categories */}
      <div className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            🥗
            <p className="mt-2 font-semibold">Salads</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            🍕
            <p className="mt-2 font-semibold">Pizza</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            🍔
            <p className="mt-2 font-semibold">Burgers</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            🥤
            <p className="mt-2 font-semibold">Drinks</p>
          </div>
        </div>
      </div>


      {/* Popular Food */}
      <div className="px-10 pb-20">
        <h2 className="text-3xl font-bold mb-8">Popular Foods</h2>

        <div className="grid grid-cols-3 gap-8">

          <div className="shadow rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt=""
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold">Healthy Salad</h3>
              <p className="text-gray-500">₹199</p>
            </div>
          </div>

          <div className="shadow rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt=""
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold">Veg Burger</h3>
              <p className="text-gray-500">₹149</p>
            </div>
          </div>

          <div className="shadow rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              alt=""
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold">Green Bowl</h3>
              <p className="text-gray-500">₹249</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;