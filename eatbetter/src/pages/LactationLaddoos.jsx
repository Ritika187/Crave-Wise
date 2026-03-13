import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const lactationLaddoos = [
  {
    id: 601,
    name: "Lactation Laddoos - Aliv & Shatavari",
    price: 399,
    oldPrice: 450,
    image1: "/Lactation/1-f.webp",
    image2: "/Lactation/1-b.webp",
    image3: "/Lactation/3Aliv.webp",
    image4: "/Lactation/4Aliv.jpg"
  },
  {
    id: 602,
    name: "Lactation Laddoos - Moringa & Amaranth",
    price: 449,
    oldPrice: 500,
    image1: "/Lactation/2-f.webp",
    image2: "/Lactation/2-b.jpg",
    image3: "/Lactation/3Moringa.webp",
    image4: "/Lactation/4Moringa.webp"
  }
];

function LactationLaddoos() {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid md:grid-cols-3 gap-8 p-10">

      {lactationLaddoos.map((product) => (

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
            className="w-full bg-orange-500 text-white py-2 mt-3 rounded hover:bg-orange-700"
          >
            ADD TO CART
          </button>

        </div>

      ))}

    </div>
  );
}

export default LactationLaddoos;