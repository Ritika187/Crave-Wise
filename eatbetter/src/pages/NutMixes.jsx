import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const nutMixes = [
  {
    id: 401,
    name: "Chocolate Coated Almonds",
    price: 499,
    oldPrice: 550,
    image1: "/Nuts/1-f.webp",
    image2: "/Nuts/1-b.webp",
    image3: "/Nuts/3Almonds.webp",
    image4: "/Nuts/4Almond.webp"
  },
  {
    id: 402,
    name: "Chocolate Coated Cashews",
    price: 599,
    oldPrice: 650,
    image1: "/Nuts/2-f.webp",
    image2: "/Nuts/2-b.webp",
    image3: "/Nuts/3Cashews.webp",
    image4: "/Nuts/4Cashews.webp"
  },
  {
    id: 403,
    name: "Chatpata Cranberry - Desi Masala",
    price: 599,
    oldPrice: 650,
    image1: "/Nuts/3-f.webp",
    image2: "/Nuts/3-b.webp",
    image3: "/Nuts/3Masala.webp",
    image4: "/Nuts/4Masala.webp"
  }
];

function NutMixes() {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid md:grid-cols-3 gap-8 p-10">

      {nutMixes.map((product) => (

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
            className="w-full bg-yellow-500 text-white py-2 mt-3 rounded hover:bg-yellow-600"
          >
            ADD TO CART
          </button>

        </div>

      ))}

    </div>
  );
}

export default NutMixes;