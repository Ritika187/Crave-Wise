import React from "react";

function Shipping() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Shipping Policy
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-3">
            Order Processing
          </h2>

          <p className="text-gray-600">
            Orders are processed within 24-48 hours after confirmation.
          </p>

        </div>

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-3">
            Delivery Time
          </h2>

          <p className="text-gray-600">
            Delivery usually takes 3-7 business days depending on your location.
          </p>

        </div>

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-3">
            Shipping Charges
          </h2>

          <p className="text-gray-600">
            Shipping charges vary based on location and order value.
          </p>

        </div>

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-3">
            Tracking
          </h2>

          <p className="text-gray-600">
            A tracking link will be shared once your order is shipped.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Shipping;