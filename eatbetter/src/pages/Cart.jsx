import React from "react";

function Cart({ cart, setCart }) {

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

        cart.map((item, index) => (

          <div key={index} className="flex gap-4 border-b pb-4 mb-4">

            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover"
            />

            <div className="flex-1">
              <p>{item.name}</p>
              <p className="font-bold">₹{item.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500"
            >
              Remove
            </button>

          </div>

        ))

      )}

    </div>

  );
}

export default Cart;