import React from "react";

function Refund() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Return & Refund Policy
      </h1>

      <div className="space-y-8">

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Damaged Products
          </h2>
          <p className="text-gray-600">
            If you receive a damaged product, please contact us within 48 hours.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Refund Processing
          </h2>
          <p className="text-gray-600">
            Refunds are processed within 5-7 business days after approval.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">
            Return Conditions
          </h2>
          <p className="text-gray-600">
            Due to the nature of food products, returns are accepted only if the
            product is damaged or incorrect.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Refund;