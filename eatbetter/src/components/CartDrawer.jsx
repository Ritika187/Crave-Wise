
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CartDrawer() {

  const { cart, setCart, cartOpen, setCartOpen } = useContext(CartContext);

  const [showPhone, setShowPhone] = useState(false);
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const freeShipping = 399;

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      setCart(updated);
    }
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const progress = Math.min((subtotal / freeShipping) * 100, 100);

  const handleCheckout = () => {

    if (phone.length !== 10) {
      alert("Enter valid phone number");
      return;
    }

    localStorage.setItem("customerPhone", phone);

    setShowPhone(false);
    setCartOpen(false);

    navigate("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[380px] bg-white shadow-xl z-[9999] transition-transform duration-300 transform flex flex-col ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >

      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="font-semibold text-lg">
          Your Cart ({cartCount})
        </h2>

        <X
          className="cursor-pointer"
          onClick={() => setCartOpen(false)}
        />
      </div>

      {/* Free Shipping */}
      <div className="p-4 border-b">
        {subtotal >= freeShipping ? (
          <p className="text-green-600 font-medium">
            Wohoo! Free shipping unlocked 🚚
          </p>
        ) : (
          <p className="text-sm">
            Add ₹{Math.max(freeShipping - subtotal, 0)} more for free shipping
          </p>
        )}

        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div
            className="bg-green-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

        {cart.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Your cart is empty
          </p>
        )}

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 border p-3 rounded-lg"
          >

            <img
              src={item.image || "/placeholder.png"}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />

            <div className="flex-1">

              <h4 className="text-sm font-semibold">
                {item.name}
              </h4>

              <p className="text-sm text-gray-600">
                ₹{item.price}
              </p>

              <div className="flex items-center gap-2 mt-2">

                <button
                  className="px-2 border rounded"
                  onClick={() => decreaseQty(index)}
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  className="px-2 border rounded"
                  onClick={() => increaseQty(index)}
                >
                  +
                </button>

                <Trash2
                  size={16}
                  className="cursor-pointer text-red-500 ml-3"
                  onClick={() => removeItem(index)}
                />

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="border-t p-4 bg-white">

        <div className="flex justify-between mb-3">
          <span className="font-semibold">
            Estimated total
          </span>

          <span className="font-bold">
            ₹{subtotal}
          </span>
        </div>

        <button
          onClick={() => setShowPhone(true)}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg"
        >
          Checkout
        </button>

      </div>

      {/* Phone Popup */}
      {showPhone && (
        <div className="absolute inset-0 bg-white p-6 flex flex-col justify-end">

          <div className="bg-white rounded-t-2xl p-6 shadow-lg">

            <h2 className="text-lg font-semibold mb-2">
              Enter your phone number
            </h2>

            <p className="text-gray-500 mb-4">
              We will use it for order updates
            </p>

            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              maxLength={10}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              className="border w-full p-3 rounded-lg mb-4"
            />

            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 text-white py-3 rounded-lg"
            >
              Continue to Checkout
            </button>

            <button
              onClick={() => setShowPhone(false)}
              className="w-full mt-3 text-gray-500"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default CartDrawer;


