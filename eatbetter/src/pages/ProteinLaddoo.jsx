import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 201,
    name: "Chocolate Fudge - Protein Laddoos",
    price: 255,
    oldPrice: 260,
    image1: "/Protein/1-f.webp",
    image2: "/Protein/1-B.webp",
    image3: "/Protein/3Fudge.webp",
    image4: "/Protein/4Fudge.webp"
  },
  {
    id: 202,
    name: "Peanut Cranberry - Protein Laddoos",
    price: 255,
    oldPrice: 260,
    image1: "/Protein/2-f.webp",
    image2: "/Protein/2-B.webp",
    image3: "/Protein/3Peanut.webp",
    image4: "/Protein/4Peanut.webp"
  }
];

function ProteinLaddoo() {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid md:grid-cols-3 gap-8 p-10">

      {products.map((product) => (

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
            <p className="line-through text-gray-400">₹{product.oldPrice}</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                ...product,
                image: product.image1
              });
            }}
            className="w-full bg-orange-500 text-white py-2 mt-3 rounded hover:bg-orange-600"
          >
            ADD TO CART
          </button>

        </div>

      ))}

    </div>
  );
}

export default ProteinLaddoo;