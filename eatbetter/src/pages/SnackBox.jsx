import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const snackBoxProducts = [
  {
    id: 501,
    name: "Snack Box - Combo of 12 Healthy Snacks",
    price: 499,
    oldPrice: 550,
    image1: "/Snacks/snacks.webp",
    image2: "/Snacks/Namkeen.webp",
    image3: "/Snacks/3.webp",
    image4: "/Snacks/4.webp"
  }
];

function SnackBox() {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid md:grid-cols-3 gap-8 p-10">

      {snackBoxProducts.map((product) => (

        <div
          key={product.id}
          className="border p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >

          <img
            src={hoveredId === product.id ? product.image2 : product.image1}
            alt={product.name}
            className="w-full"
          />

          <h2 className="font-semibold mt-3">
            {product.name}
          </h2>

          <div className="flex gap-2 items-center">
            <p className="font-bold text-lg">₹{product.price}</p>
            <p className="line-through text-gray-400">
              ₹{product.oldPrice}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                ...product,
                image: product.image1
              });
            }}
            className="w-full bg-purple-500 text-white py-2 mt-3 rounded hover:bg-purple-600"
          >
            ADD TO CART
          </button>

        </div>

      ))}

    </div>
  );
}

export default SnackBox;