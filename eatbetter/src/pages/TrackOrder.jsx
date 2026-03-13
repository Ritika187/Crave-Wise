import React, { useState } from "react";

function TrackOrder() {

  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();

    if (!orderId || !email) {
      setStatus("Please fill all fields");
      return;
    }

    // Demo order check
    if (orderId === "12345") {
      setStatus("Your order has been shipped 🚚");
    } else {
      setStatus("Order not found");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleTrack}
        className="w-[400px] bg-white p-8 shadow rounded"
      >

        <h1 className="text-3xl text-center mb-6 font-medium">
          Track My Order
        </h1>

        {/* Order ID */}
        <div className="mb-5">
          <label className="text-sm">Order ID</label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full border mt-2 p-3"
            placeholder="Enter Order ID"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border mt-2 p-3"
            placeholder="Enter Email"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold"
        >
          TRACK ORDER
        </button>

        {status && (
          <p className="text-center mt-6 text-gray-700">
            {status}
          </p>
        )}

      </form>

    </div>
  );
}

export default TrackOrder;