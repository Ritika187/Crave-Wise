// MyAccount.jsx
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function MyAccount() {

  const navigate = useNavigate();
  const { setCart, setCartOpen } = useContext(CartContext);

  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }

  }, [navigate]);

  const handleLogout = () => {
    // remove data from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("cart");

    // clear cart state
    setCart([]);
    setCartOpen(false);

    // notify navbar
    window.dispatchEvent(new Event("authChange"));

    // redirect to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {user && (

        <div className="max-w-6xl mx-auto flex gap-8">

          {/* Sidebar */}
          <div className="w-64 bg-white rounded shadow p-4">

            <h2 className="text-xl font-semibold mb-4">My Account</h2>

            <button
              onClick={() => setActiveTab("dashboard")}
              className="block w-full text-left py-2 hover:text-orange-500"
            >
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className="block w-full text-left py-2 hover:text-orange-500"
            >
              Orders
            </button>

            <button
              onClick={() => setActiveTab("address")}
              className="block w-full text-left py-2 hover:text-orange-500"
            >
              Addresses
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className="block w-full text-left py-2 hover:text-orange-500"
            >
              Profile Details
            </button>

            <button
              onClick={handleLogout}
              className="mt-4 text-red-500"
            >
              Logout
            </button>

          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded shadow p-6">

            {activeTab === "dashboard" && (
              <>
                <h1 className="text-2xl font-semibold mb-4">
                  Welcome {user.username}
                </h1>
                <p>
                  From your account dashboard you can view your recent orders,
                  manage your addresses and edit your account details.
                </p>
              </>
            )}

            {activeTab === "orders" && (
              <>
                <h1 className="text-2xl font-semibold mb-4">Order History</h1>
                <p>You haven't placed any orders yet.</p>
              </>
            )}

            {activeTab === "address" && (
              <>
                <h1 className="text-2xl font-semibold mb-4">Addresses</h1>
                <p>No address added yet.</p>
              </>
            )}

            {activeTab === "profile" && (
              <>
                <h1 className="text-2xl font-semibold mb-4">Profile Details</h1>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </>
            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default MyAccount;